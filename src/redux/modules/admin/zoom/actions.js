import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_SET_LOADING,
  payload
});
export const setData = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_SET_DATA,
  payload
});
export const setTotal = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_SET_TOTAL,
  payload
});
export const setError = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_ERROR,
  payload
});
export const fetchData = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_FETCH_DATA,
  payload
});

export const registerAccount = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_REGISTER,
  payload
});

export const unRegisterAccount = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_UNREGISTER,
  payload
});

export const stopMeeting = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_STOP_MEETING,
  payload
});

export const zoomSignature = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_SIGNATURE,
  payload
});

export const getSingleAccount = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_FETCH_SINGLE,
  payload
});

export const createMeeting = (payload) => ({
  type: types.ADMIN_ZOOM_ACCOUNTS_CREATE_MEETING,
  payload
});
