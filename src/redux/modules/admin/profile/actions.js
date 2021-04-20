import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.ADMIN_PROFILE_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.ADMIN_PROFILE_SET_DATA, payload });
export const setError = (payload) => ({ type: types.ADMIN_PROFILE_ERROR, payload });
export const fetchData = () => ({ type: types.ADMIN_PROFILE_FETCH_DATA });

export const updateProfile = (payload) => ({ type: types.ADMIN_PROFILE_UPDATE, payload });
export const uploadPhoto = (payload) => ({ type: types.ADMIN_PROFILE_UPLOAD_PHOTO, payload });
export const deletePhoto = (payload) => ({ type: types.ADMIN_PROFILE_DELETE_PHOTO, payload });
export const downloadPhoto = (payload) => ({ type: types.ADMIN_PROFILE_DOWNLOAD_PHOTO, payload });
