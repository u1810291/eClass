import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.STUDENT_PAYMENTS_SET_LOADING, payload });
export const setError = (payload) => ({ type: types.STUDENT_PAYMENTS_SET_ERROR, payload });
export const topUp = (payload, success) => ({
  type: types.STUDENT_PAYMENTS_TOP_UP,
  payload,
  success
});
