import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/subjects';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector, addSubjectSelector } from './selectors';

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
    yield put(setError(error));
  }
}

function* addSubject({ payload, success }) {
  try {
    console.log(payload);
    const { data } = addSubjectSelector(payload);
    const res = yield service.createSubject(data);
    yield put(setError(''));
    success(res.data);
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* subjectsSaga() {
  yield takeLatest(types.TABLE_ADMIN_SUBJECTS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_ADMIN_SUBJECTS_CREATE_SUBJECT, addSubject);
}
