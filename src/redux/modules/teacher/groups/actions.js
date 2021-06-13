import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({
  type: types.TABLE_TEACHER_FETCH_STUDENTS_SET_LOADING,
  payload
});
export const setData = (payload) => ({
  type: types.TABLE_TEACHER_FETCH_STUDENTS_SET_DATA,
  payload
});
export const setTotal = (payload) => ({
  type: types.TABLE_TEACHER_FETCH_STUDENTS_SET_TOTAL,
  payload
});
export const setError = (payload) => ({
  type: types.TABLE_TEACHER_FETCH_STUDENTS_ERROR,
  payload
});
export const getStudents = (payload, success) => ({
  type: types.TABLE_TEACHER_FETCH_STUDENTS_FETCH_DATA,
  payload,
  success
});
