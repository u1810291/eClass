import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_STUDENT_BALANCE_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_STUDENT_BALANCE_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_STUDENT_BALANCE_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_STUDENT_BALANCE_ERROR, payload });
export const fetchData = () => ({ type: types.TABLE_STUDENT_BALANCE_FETCH_DATA });
