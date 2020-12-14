import types from "../../../constants/action-types";

export const login = (access_token, refresh_token) => ({
  type: types.AUTH_LOGIN,
  access_token,
  refresh_token,
});
export const logout = () => ({ type: types.AUTH_LOGOUT });
