import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/auth';

import {
  setAccessToken, setRefreshToken, setError, setStudent, setTeacher, setAdmin
} from './actions';

function* login({ payload, success }) {
  try {
    const { data } = yield service.getToken(payload);
    success(data.access_token, data.refresh_token, data.refresh_token_expire_at);
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* validate({ payload }) {
  try {
    // Handle token verify logic here
    yield put(setAccessToken(payload.access_token));
    yield put(setRefreshToken(payload.refresh_token));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* regStudent() {
  try {
    const res = yield service.registerStudent();
    yield put(setStudent(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* regTeacher() {
  try {
    const res = yield service.registerStudent();
    yield put(setTeacher(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* regAdmin() {
  try {
    const res = yield service.registerStudent();
    yield put(setAdmin(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
}
export default function* authSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
  yield takeLatest(types.AUTH_VERIFY, validate);

  yield takeLatest(types.AUTH_REGISTER_STUDENT, regStudent);
  yield takeLatest(types.AUTH_REGISTER_TEACHER, regTeacher);
  yield takeLatest(types.AUTH_REGISTER_ADMIN, regAdmin);
}
