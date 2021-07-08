import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({
  type: types.TABLE_TEACHER_HOMEWORKS_SET_LOADING,
  payload
});
export const setData = (payload) => ({ type: types.TABLE_TEACHER_HOMEWORKS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_TEACHER_HOMEWORKS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_TEACHER_HOMEWORKS_ERROR, payload });
export const fetchData = (payload) => ({
  type: types.TABLE_TEACHER_HOMEWORKS_FETCH_DATA,
  payload
});

export const setSingle = (payload) => ({ type: types.TABLE_TEACHER_HOMEWORKS_SET_SINGLE, payload });
export const getSingle = (payload) => ({
  type: types.TABLE_TEACHER_HOMEWORKS_GET_SINGLE,
  payload
});

export const addHomework = (payload, success) => ({
  type: types.TABLE_TEACHER_HOMEWORKS_ADD,
  payload,
  success
});

export const deleteExercise = (payload, success) => ({
  type: types.TABLE_TEACHER_HOMEWORKS_DELETE,
  payload,
  success
});

export const markExercise = (payload, success) => ({
  type: types.TABLE_TEACHER_HOMEWORKS_MARK,
  payload,
  success
});
