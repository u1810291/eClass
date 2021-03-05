import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_ADMIN_SUBJETCS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_ADMIN_SUBJETCS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_ADMIN_SUBJETCS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_ADMIN_SUBJETCS_ERROR, payload });
export const fetchData = (payload) => ({ type: types.TABLE_ADMIN_SUBJETCS_FETCH_DATA, payload });
export const addSubject = (payload, success) => ({
  type: types.TABLE_ADMIN_SUBJETCS_CREATE_SUBJETC,
  payload,
  success
});
