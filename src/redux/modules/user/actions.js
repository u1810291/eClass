import types from '../../../constants/action-types';

export const setData = (payload) => ({ type: types.SET_USER_INFO, payload });
export const setError = (payload) => ({ type: types.ERROR_USER_INFO, payload });
export const fetchData = (payload) => ({ type: types.FETCH_USER_INFO, payload });
