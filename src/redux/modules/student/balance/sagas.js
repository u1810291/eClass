/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/finance';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector, paymentSelector } from './selectors';

function* fetchData() {
  yield put(setLoading(true));
  try {
    const res = yield service.getBalance();
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}
function* fetchPayments() {
  yield put(setLoading(true));
  try {
    const res = yield service.getPayments();
    const { total, data } = paymentSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

export default function* balanceSaga() {
  yield takeLatest(types.TABLE_STUDENT_BALANCE_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_STUDENT_PAYMENTS_FETCH_DATA, fetchPayments);
}
