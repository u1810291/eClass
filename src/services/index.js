/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVICE_URL;

const service = axios.create({ baseURL });
const CustomAxios = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = axios.create({ baseURL: '/api' });
    }
    return this._instance;
  }
};

async function saveToken(access_token, refresh_token) {
  await sessionStorage.setItem('access_token', access_token);
  await sessionStorage.setItem('refresh_token', refresh_token);
}
function destroyToken() {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('refresh_token');
}
function refresh() {
  return new Promise((resolve, reject) => {
    service.post('/api/v1/refresh', {
      refresh_token: sessionStorage.getItem('refresh_token')
    }).then((response) => {
      saveToken(response.data.access_token, response.data.refresh_token);
      window.location.replace('/');
      return resolve(response.data.access_token);
    }).catch((error) => {
      destroyToken();
      window.location.replace('/logout');
      return reject(error);
    });
  });
}

service.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      alert('Login or password is incorrect');
      window.location.replace('/logout');
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('refresh_token');
    }
    if (!status) {
      refresh();
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  const access_token = sessionStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

export function execute(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}

export { service };
export default CustomAxios.instance;
