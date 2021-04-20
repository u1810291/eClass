/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/teacher/profile';
import {
  setData,
  setError,
  setLoading
} from './actions';

function* fetchData() {
  try {
    yield put(setLoading(true));
    const res = yield service.listCertificate();
    yield put(setError(''));
    yield put(setData(res.data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* addCertificate({ payload, success }) {
  try {
    const res = yield service.addCertificate(payload);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* downloadCertificate({ payload, success }) {
  try {
    const res = yield service.downloadCertificate(payload);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* deleteCertificate({ payload, success }) {
  try {
    const res = yield service.deleteCertificate(payload);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

export default function* teacherProfileSaga() {
  yield takeLatest(types.TEACHER_CERTIFICATE_FETCH_DATA, fetchData);
  yield takeLatest(types.TEACHER_CERTIFICATE_ADD, addCertificate);
  yield takeLatest(types.TEACHER_CERTIFICATE_DOWNLOAD, downloadCertificate);
  yield takeLatest(types.TEACHER_CERTIFICATE_DELETE, deleteCertificate);
}
