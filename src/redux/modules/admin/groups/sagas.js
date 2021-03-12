import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/groups';
import lesson from '../../../../services/admin/lesson';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector, addGroupSelector } from './selectors';

function* fetchData({ payload }) {
  yield put(setLoading(true));
  try {
    const res = yield service.getAll(payload.query);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

function* createLesson({ payload, success }) {
  try {
    yield put(setLoading(true));
    const res = yield lesson.createLesson(payload);
    yield put(setError(''));
    success(res.data);
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error || error));
  }
}

function* addGroup({ payload, success }) {
  try {
    yield put(setLoading(true));
    console.log(payload);
    const data = addGroupSelector(payload);
    console.log(data);
    const res = yield service.createGroup(data);
    console.log(res);
    yield put(setError(''));
    success(res.data);
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* adminGroupsSaga() {
  yield takeLatest(types.TABLE_ADMIN_GROUPS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_CREATE_LESSON, createLesson);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_CREATE_GROUP, addGroup);
}
