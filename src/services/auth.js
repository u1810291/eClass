import axios, { execute } from ".";

export default {
  getToken: ({ email, password }) =>
    execute(axios.post("/auth", { email, password })),
  sendRestLink: (data) => execute(axios.post("/auth/reset", { data })),
  authVerify: (params) =>
    execute(axios.post("/front-end/auth/verify", { params })),
  changePassword: (data) =>
    execute(axios.post("/auth/changePassword"), { data }),
};
