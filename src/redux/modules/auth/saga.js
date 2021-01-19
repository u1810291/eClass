import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/auth';
import {
  setAccessToken, setRefreshToken, setExpiresAt, setError
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
    yield put(setExpiresAt(payload.refresh_token_expire_at));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
  yield takeLatest(types.AUTH_VERIFY, validate);
}
