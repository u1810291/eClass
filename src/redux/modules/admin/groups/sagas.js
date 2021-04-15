/* eslint-disable no-alert */
/* eslint-disable no-console */
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
    yield put(setError(error.response ? error.response.data.error_message : error));
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
    alert(error.response ? error.response.data.error_message : error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* addGroup({ payload, success }) {
  try {
    const { data } = addGroupSelector(payload);
    const res = yield service.createGroup(data);
    yield put(setError(''));
    success(res);
  } catch (error) {
    alert(error.response ? error.response.data.error_message : error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* addStudent({ payload, success }) {
  try {
    console.log(payload);
    const res = yield service.addGroupStudents(payload);
    success(res);
  } catch (error) {
    alert(error.response ? error.response.data.error_message : error);
    success(error.response ? error.response.data.error_message : error);
  }
}

function* editGroup({ payload, success }) {
  try {
    const { data } = addGroupSelector(payload);
    const res = service.updateGroupIdInBody(data);
    yield put(setError(''));
    success(res.data);
  } catch (error) {
    alert(error.response ? error.response.data.error_message : error);
    success(error.response ? error.response.data.error_message : error);
  }
}

function* deleteGroup({ payload, success }) {
  try {
    const res = service.deleteGroupIdInParams(payload);
    console.log(res);
    yield put(setError(''));
    success([res.data]);
  } catch (error) {
    alert(error.response ? error.response.data.error_message : error);
    success(error.response ? error.response.data.error_message : error);
  }
}

export default function* adminGroupsSaga() {
  yield takeLatest(types.TABLE_ADMIN_GROUPS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_CREATE_LESSON, createLesson);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_CREATE_GROUP, addGroup);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_EDIT_GROUP, editGroup);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_DELETE_GROUP, deleteGroup);
  yield takeLatest(types.TABLE_ADMIN_GROUPS_ADD_STUDENT_GROUP, addStudent);
}
