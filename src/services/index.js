import axios from "axios";
import auth from "./auth";
const baseURL = process.env.REACT_APP_SERVICE_URL;

const service = axios.create({ baseURL });
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
    return new Promise((resolve, reject) => {
      const originalReq = error.config;
      const refresh_token = sessionStorage.getItem("refresh_token");
      if (error.response.status === 403 && refresh_token !== null) {
        originalReq._retry = true;
        let res = auth
          .refreshToken(refresh_token)
          .then((res) => {
            console.log(res);
            sessionStorage.setItem("access_token", res.access_token);
            sessionStorage.setItem("refresh_token", res.refresh_token);
            return axios(originalReq);
          })
          .catch(reject);
        resolve(res);
      }
      if (error.response.status === 403) {
        alert("Invalid Login or password");
      }
      if (error.response.status === 401) {
        window.location.replace("/logout");
      }
      return Promise.reject(error);
    });
  }
);

service.interceptors.request.use((config) => {
  const access_token = sessionStorage.getItem("access_token");
  // eslint-disable-next-line no-param-reassign
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
