import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_ADMIN_STUDENTS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_ADMIN_STUDENTS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_ADMIN_STUDENTS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_ADMIN_STUDENTS_ERROR, payload });

export const fetchData = (payload, params) => ({
  type: types.TABLE_ADMIN_STUDENTS_FETCH_DATA,
  payload,
  params
});

export const setTariffs = (payload) => ({ type: types.ADMIN_SET_TARIFFS, payload });

export const fetchTariffs = (success) => ({
  type: types.ADMIN_FETCH_TARIFFS,
  success
});

export const topUpStudent = (payload, success) => ({
  type: types.ADMIN_TOPUP_STUDENTS,
  payload,
  success
});

export const getSingleUser = (payload, params) => ({
  type: types.ADMIN_FETCH_SINGLE_USER,
  payload,
  params
});
export const setSigleUser = (payload) => ({ type: types.ADMIN_SINGLE_USER_SET_DATA, payload });
