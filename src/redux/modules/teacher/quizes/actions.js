import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_TEACHER_QUIZES_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_TEACHER_QUIZES_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_TEACHER_QUIZES_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_TEACHER_QUIZES_ERROR, payload });
export const fetchData = (payload) => ({
  type: types.TABLE_TEACHER_QUIZES_FETCH_DATA,
  payload
});
