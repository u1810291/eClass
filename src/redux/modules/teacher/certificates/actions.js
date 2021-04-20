import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TEACHER_CERTIFICATE_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TEACHER_CERTIFICATE_SET_DATA, payload });
export const setError = (payload) => ({ type: types.TEACHER_CERTIFICATE_ERROR, payload });
export const fetchData = () => ({ type: types.TEACHER_CERTIFICATE_FETCH_DATA });

export const addCertificate = (payload) => ({ type: types.TEACHER_CERTIFICATE_ADD, payload });
export const downloadCertificate = (payload) => ({
  type: types.TEACHER_CERTIFICATE_DOWNLOAD,
  payload
});
export const deleteCertificate = (payload) => ({ type: types.TEACHER_CERTIFICATE_DELETE, payload });
