/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/teacher/profile';
import {
  setData,
  setError,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* fetchData() {
  try {
    yield put(setLoading(true));
    const res = yield service.getProfile();
    if (res.data.photo_url) {
      yield put(setError(''));
      const url = res.data.photo_url.split('api');
      const image = yield service.getProfilePhoto(`/api${url[1]}`);
      const { data } = dataSelector(res.data, image);
      yield put(setData(data));
      yield put(setLoading(false));
    }
    yield put(setData(res.data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* updateProfile({ payload, success }) {
  try {
    const res = yield service.updateProfile(payload);
    console.log(res);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* uploadPhoto({ payload, success }) {
  try {
    console.log(payload);
    const res = yield service.uploadPhoto(payload);
    console.log(res);
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

export default function* teacherProfileSaga() {
  yield takeLatest(types.TEACHER_PROFILE_FETCH_DATA, fetchData);
  yield takeLatest(types.TEACHER_PROFILE_UPDATE, updateProfile);
  yield takeLatest(types.TEACHER_PROFILE_UPLOAD_PHOTO, uploadPhoto);
  yield takeLatest(types.TEACHER_PROFILE_DOWNLOAD_PHOTO, downloadPhoto);
  yield takeLatest(types.TEACHER_PROFILE_DELETE_PHOTO, deletePhoto);
}
