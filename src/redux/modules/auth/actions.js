import types from '../../../constants/action-types';

export const login = (token) => ({ type: types.AUTH_LOGIN, token });
export const logout = () => ({ type: types.AUTH_LOGOUT });
