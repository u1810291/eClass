import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/subjects';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData() {
  try {
    yield put(setLoading(true));
    const res = yield service.getAll();
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response.data.error_message));
  }
}

function* addSubject({ payload, success }) {
  try {
    yield put(setLoading(true));
    const res = yield service.createSubject(payload);
    yield put(setError(''));
    success(res.data);
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response.data.error_message));
  }
}

export default function* subjectsSaga() {
  yield takeLatest(types.TABLE_ADMIN_GROUPS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_CREATE_GROUP, addSubject);
}
