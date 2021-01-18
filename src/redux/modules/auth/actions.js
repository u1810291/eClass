import types from '../../../constants/action-types';

// eslint-disable-next-line camelcase
export const login = (access_token, refresh_token, expires_at) => ({
  type: types.AUTH_LOGIN,
  access_token,
  refresh_token,
  expires_at
});
export const logout = () => ({ type: types.AUTH_LOGOUT });
