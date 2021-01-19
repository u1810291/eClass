import { takeLatest, put, delay } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/lesson';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    if (payload.isSearch) yield delay(500);
    yield put(setLoading(true));
    const res = yield service.getAll(payload.query);
    const { data, total } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* fetchStatuses() {
  try {
    const statuses = yield service.getAllStatus();
    yield put(setStatuses(statuses.data.statuses));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* deliveriesSaga() {
  yield takeLatest(types.TABLE_DELIVERIES_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_DELIVERIES_FETCH_STATUSES, fetchStatuses);
}
