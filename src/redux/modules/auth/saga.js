/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/auth';
import { studentSelector, teachersSelector, adminsSelector } from './selectors';

import {
  setAccessToken, setRefreshToken, setError
} from './actions';

function* login({ payload, success }) {
  try {
    const { data } = yield service.getToken(payload);
    success(data.access_token, data.refresh_token);
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* validate({ payload }) {
  try {
    // Handle token verify logic here
    yield put(setAccessToken(payload.access_token));
    yield put(setRefreshToken(payload.refresh_token));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* regStudent({ payload, success }) {
  try {
    const { data } = studentSelector(payload);
    const res = yield service.registerStudent(data);
    success(res.data);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error.response ? error.response.data.error_message : error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}
function* regTeacher({ payload, success }) {
  try {
    const { data } = teachersSelector(payload);
    const res = yield service.registerTeacher(data);
    success(res.data);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error.response ? error.response.data.error_message : error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}
function* regAdmin({ payload, success }) {
  try {
    const { data } = adminsSelector(payload);
    const res = yield service.registerAdmin(data);
    success(res.data);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error.response ? error.response.data.error_message : error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}
export default function* authSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
  yield takeLatest(types.AUTH_VERIFY, validate);

  yield takeLatest(types.AUTH_REGISTER_STUDENT, regStudent);
  yield takeLatest(types.AUTH_REGISTER_TEACHER, regTeacher);
  yield takeLatest(types.AUTH_REGISTER_ADMIN, regAdmin);
}
