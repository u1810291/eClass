import axios from "axios";
const baseURL = process.env.REACT_APP_SERVICE_URL;

const service = axios.create({ baseURL });
console.log(baseURL);
const CustomAxios = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = axios.create({ baseURL: "/api" });
    }
    return this._instance;
  },
};

service.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      window.location.replace("/logout");
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
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
