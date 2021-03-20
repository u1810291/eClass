import types from '../../../constants/action-types';

export const setData = (payload) => ({ type: types.TABLE_LESSON_SET_DATA, payload });
export const setError = (payload) => ({ type: types.TABLE_LESSON_ERROR, payload });
export const fetchData = (payload) => ({
  type: types.TABLE_LESSON_FETCH_DATA,
  payload
});
