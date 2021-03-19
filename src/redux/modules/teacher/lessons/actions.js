import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_TEACHER_LESSONS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_TEACHER_LESSONS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_TEACHER_LESSONS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_TEACHER_LESSONS_ERROR, payload });
export const fetchData = (payload) => ({ type: types.TABLE_TEACHER_LESSONS_FETCH_DATA, payload });

export const startLesson = (payload, success) => ({
  type: types.TEACHER_START_LESSONS,
  payload,
  success
});
