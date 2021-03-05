import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/users';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData() {
  yield put(setLoading(true));
  try {
    const res = yield service.getUsers('student');
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setTotal(total));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response.data.error_message));
  }
}

export default function* adminUsersSaga() {
  yield takeLatest(types.TABLE_ADMIN_STUDENTS_FETCH_DATA, fetchData);
}
