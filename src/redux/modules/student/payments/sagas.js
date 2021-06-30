/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/payments';
import {
  setError,
  setMehods
} from './actions';

function* topUp({ payload, success }) {
  try {
    const res = yield service.getQuizes(payload.query);
    yield put(setError(''));
    yield success(res.data);
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* getMethods(payload) {
  try {
    const { data } = yield service.getMethods(payload);
    yield put(setError(''));
    yield put(setMehods(data.content));
  } catch (error) {
    console.log(error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

export default function* studentQuizesSaga() {
  yield takeLatest(types.STUDENT_PAYMENTS_TOP_UP, topUp);
  yield takeLatest(types.STUDENT_PAYMENTS_GET_METHODS, getMethods);
}
