import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_ADMIN_SUBJECTS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_ADMIN_SUBJECTS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_ADMIN_SUBJECTS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_ADMIN_SUBJECTS_ERROR, payload });
export const fetchData = () => ({ type: types.TABLE_ADMIN_SUBJECTS_FETCH_DATA });
export const addSubject = (payload, success) => ({
  type: types.TABLE_ADMIN_SUBJECTS_CREATE_SUBJECT,
  payload,
  success
});
