/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/profile';
import {
  setData,
  setError,
  setLoading
} from './actions';

import { updateProfileSelector } from './selectors';

function* fetchData() {
  try {
    yield put(setLoading(true));
    const res = yield service.getProfile();
    yield put(setError(''));
    yield put(setData(res.data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* updateProfile({ payload, success }) {
  try {
    const { data } = yield updateProfileSelector(payload);
    const res = yield service.updateProfile(data);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* uploadPhoto({ payload, success }) {
  try {
    const res = yield service.uploadPhoto(payload);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* downloadPhoto({ payload, success }) {
  try {
    const res = yield service.downloadPhoto(payload);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* deletePhoto({ payload, success }) {
  try {
    const res = yield service.deletePhoto(payload);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

export default function* studentProfileSaga() {
  yield takeLatest(types.STUDENT_PROFILE_FETCH_DATA, fetchData);
  yield takeLatest(types.STUDENT_PROFILE_UPDATE, updateProfile);
  yield takeLatest(types.STUDENT_PROFILE_UPLOAD_PHOTO, uploadPhoto);
  yield takeLatest(types.STUDENT_PROFILE_DOWNLOAD_PHOTO, downloadPhoto);
  yield takeLatest(types.STUDENT_PROFILE_DELETE_PHOTO, deletePhoto);
}
