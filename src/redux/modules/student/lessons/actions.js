import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_DELIVERIES_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_DELIVERIES_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_DELIVERIES_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_DELIVERIES_ERROR, payload });
export const setStatuses = (payload) => ({ type: types.TABLE_DELIVERIES_SET_STATUSES, payload });
export const fetchData = (payload) => ({ type: types.TABLE_DELIVERIES_FETCH_DATA, payload });
export const fetchStatuses = () => ({ type: types.TABLE_DELIVERIES_FETCH_STATUSES });
