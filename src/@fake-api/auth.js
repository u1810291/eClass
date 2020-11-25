import users from "../data/users";

export default (mock) => {
  mock.onPost("/auth").reply(
    (config) =>
      new Promise((resolve) => {
        const { username, password } = JSON.parse(config.data);
        const find = users.find((user) => user.username === username);
        if (find && find.password === password) {
          return resolve([200, { token: "test_token", userId: "userId" }]);
        }
        return resolve([400, { message: "not matched" }]);
      })
  );
  mock.onPost("/auth/reset").reply(200, { message: "success" });
  mock.onPost("/front-end/auth/verify").reply(200, { message: "success" });
  mock
    .onPost("front-end/auth/pin-code/verify")
    .reply(200, { message: "success" });
  mock.onPost("/auth/changePassword").reply(200, { message: "success" });
};
