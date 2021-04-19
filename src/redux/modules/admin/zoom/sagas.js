/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/zoom';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  yield put(setLoading(true));
  try {
    console.log(payload);
    const res = yield service.getAccountList(payload.query);
    console.log(res);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* registerAccount({ payload, success }) {
  try {
    console.log(payload);
    const res = yield service.registerAccount(payload);
    success(res);
  } catch (error) {
    success(error);
    console.log(error);
  }
}
function* unRegisterAccount({ payload, success }) {
  try {
    const res = yield service.unRegisterAccount(payload);
    console.log(res);
    success(res);
  } catch (error) {
    console.log(error);
  }
}
function* stopMeeting({ payload, success }) {
  try {
    const res = yield service.stopMeeting(payload);
    success(res);
  } catch (error) {
    console.log(error);
    success(error);
  }
}
function* zoomSignature({ payload, success }) {
  try {
    const res = yield service.zoomSignature(payload);
    success(res);
  } catch (error) {
    console.log(error);
    success(error);
  }
}
function* getSingleAccount({ payload, success }) {
  try {
    const res = yield service.getSingleAccount(payload);
    success(res);
  } catch (error) {
    console.log(error);
    success(error);
  }
}
function* createMeeting({ payload, success }) {
  try {
    const res = yield service.createMeeting(payload);
    success(res);
  } catch (error) {
    console.log(error);
    success(error);
  }
}
export default function* adminAccountsSaga() {
  yield takeLatest(types.ADMIN_ZOOM_ACCOUNTS_FETCH_DATA, fetchData);
  yield takeLatest(types.ADMIN_ZOOM_ACCOUNTS_REGISTER, registerAccount);
  yield takeLatest(types.ADMIN_ZOOM_ACCOUNTS_UNREGISTER, unRegisterAccount);
  yield takeLatest(types.ADMIN_ZOOM_ACCOUNTS_STOP_MEETING, stopMeeting);
  yield takeLatest(types.ADMIN_ZOOM_ACCOUNTS_SIGNATURE, zoomSignature);
  yield takeLatest(types.ADMIN_ZOOM_ACCOUNTS_FETCH_SINGLE, getSingleAccount);
  yield takeLatest(types.ADMIN_ZOOM_ACCOUNTS_CREATE_MEETING, createMeeting);
}
