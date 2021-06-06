/* eslint-disable no-alert */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/teacher/exercise';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector, addHomeworkSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    yield put(setLoading(true));
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

function* addHomework({ payload, success }) {
  try {
    const { data } = addHomeworkSelector(payload.values);
    const res = yield service.addHomework(payload.id, data);
    success(res);
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
    alert(error);
  }
}

function* deleteExercise(payload, success) {
  try {
    const res = yield service.deleteExercise(payload);
    yield success(res);
  } catch (error) {
    alert(error.response ? error.response.data.error_message : error);
  }
}

function* markExercise(payload, success) {
  try {
    const res = yield service.markExercise(payload);
    yield success(res);
  } catch (error) {
    alert(error.response ? error.response.data.error_message : error);
  }
}

export default function* teacherHomeworksSaga() {
  yield takeLatest(types.TABLE_TEACHER_HOMEWORKS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_TEACHER_HOMEWORKS_ADD, addHomework);
  yield takeLatest(types.TABLE_TEACHER_HOMEWORKS_DELETE, deleteExercise);
  yield takeLatest(types.TABLE_TEACHER_HOMEWORKS_MARK, markExercise);
}
