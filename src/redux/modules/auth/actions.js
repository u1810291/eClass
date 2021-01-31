import types from '../../../constants/action-types';

export const setAccessToken = (payload) => ({ type: types.AUTH_SET_ACCESS_TOKEN, payload });
export const setRefreshToken = (payload) => ({ type: types.AUTH_SET_REFRESH_TOKEN, payload });
export const setExpiresAt = (payload) => ({ type: types.AUTH_SET_EXPIRES_AT, payload });
export const logout = () => ({ type: types.AUTH_LOGOUT });
export const setError = () => ({ type: types.AUTH_ERROR });
export const verify = (payload) => ({ type: types.AUTH_VERIFY, payload });
export const login = (payload, success) => ({ type: types.AUTH_LOGIN, payload, success });

export const setStudent = (payload) => ({ type: types.AUTH_REGISTER_STUDENT, payload });
export const setTeacher = (payload) => ({ type: types.AUTH_REGISTER_TEACHER, payload });
export const setAdmin = (payload) => ({ type: types.AUTH_REGISTER_ADMIN, payload });
