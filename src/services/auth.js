import axios, { execute } from ".";

export default {
  getToken: ({ username, password }) => {
    execute(axios.post("/api/v1/login", { username, password }));
  },
  sendRestLink: (data) => execute(axios.post("/auth/reset", { data })),
  authVerify: (params) =>
    execute(axios.post("/front-end/auth/verify", { params })),
  changePassword: (data) =>
    execute(axios.post("/auth/changePassword"), { data }),
};
