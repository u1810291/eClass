import types from '../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.FILES_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.FILES_SET_DATA, payload });
export const setError = (payload) => ({ type: types.FILES_ERROR, payload });

export const getFiles = (payload) => ({ type: types.FILES_FETCH_DATA, payload });
export const uploadFile = (payload, success) => ({
  type: types.FILES_UPLOAD_DATA,
  payload,
  success
});
export const deleteFile = (payload) => ({ type: types.FILES_DELETE_DATA, payload });
export const getFileById = (payload) => ({ type: types.FILES_BY_ID_FETCH_DATA, payload });
