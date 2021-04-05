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

import { dataSelector } from './selectors';

function* fetchData() {
  yield put(setLoading(true));
  try {
    const res = yield service.getBalance();
    console.log(res);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* balanceSaga() {
  yield takeLatest(types.TABLE_TEACHER_BALANCE_FETCH_DATA, fetchData);
}
