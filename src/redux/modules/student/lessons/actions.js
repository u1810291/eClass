import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_ERROR, payload });
export const setStartError = (payload) => ({ type: types.STUDENT_JOIN_LESSONS_ERROR, payload });
export const fetchData = (payload) => ({ type: types.TABLE_STUDENT_LESSONS_FETCH_DATA, payload });

export const joinLesson = (payload, success) => ({
  type: types.STUDENT_JOIN_LESSONS,
  payload,
  success
});

export const cancelLesson = (payload, success) => ({
  type: types.STUDENT_CANCEL_LESSONS,
  payload,
  success
});
