import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({
  type: types.ADMIN_TARIFFS_SET_LOADING,
  payload
});
export const setData = (payload) => ({
  type: types.ADMIN_TARIFFS_SET_DATA,
  payload
});
export const setTotal = (payload) => ({
  type: types.ADMIN_TARIFFS_SET_TOTAL,
  payload
});
export const setError = (payload) => ({
  type: types.ADMIN_TARIFFS_ERROR,
  payload
});
export const fetchData = (payload) => ({
  type: types.ADMIN_TARIFFS_FETCH_DATA,
  payload
});
