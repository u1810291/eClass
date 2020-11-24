import axios from "axios";

const baseURL = process.env.REACT_APP_SERVICE_URL || "/api";

const Axios = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = axios.create({ baseURL });
    }
    return this._instance;
  },
};

Axios.instance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      window.location.replace("/logout");
    }
    return Promise.reject(error);
  }
);

Axios.instance.interceptors.request.use((config) => {
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

// Depreciated
export function paginate(url, params) {
  const [startRow = 0, endRow = 10] = params;
  return execute(Axios.instance.get(url, { startRow, endRow }));
}

export default Axios.instance;
