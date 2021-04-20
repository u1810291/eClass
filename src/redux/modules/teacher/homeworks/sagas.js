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

import { dataSelector } from './selectors';

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
    const { data } = dataSelector(payload.values);
    const res = yield service.addHomework(data);
    yield put(setError(''));
    success(res);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }
}

export default function* teacherHomeworksSaga() {
  yield takeLatest(types.TABLE_TEACHER_HOMEWORKS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_TEACHER_HOMEWORKS_ADD, addHomework);
}
