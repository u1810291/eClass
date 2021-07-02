import types from '../../../../constants/action-types';

export const setError = (payload) => ({ type: types.STUDENT_PAYMENTS_SET_ERROR, payload });
export const setMehods = (payload) => ({ type: types.STUDENT_PAYMENTS_SET_METHODS, payload });
export const getMethods = (payload) => ({ type: types.STUDENT_PAYMENTS_GET_METHODS, payload });
export const topUp = (payload, success) => ({
  type: types.STUDENT_PAYMENTS_TOP_UP,
  payload,
  success
});
