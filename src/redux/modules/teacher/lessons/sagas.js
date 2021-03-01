/* eslint-disable no-alert */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import { success } from '../../../../components/Forms/Inputs/style';
import types from '../../../../constants/action-types';
import service from '../../../../services/teacher/lesson';
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
    const { query } = payload;

    const res = yield service.getAll(query);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.response.data.error_code, error.response.data.error_message));
  }
}
function* startLesson({ payload }) {
  try {
    console.log(payload);
    const res = yield service.startLesson(payload);
    yield put(setError(''));
    console.log(res);
    success(res);
  } catch (error) {
    console.log(error.response.data);
    alert(error.response.data);
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_TEACHER_LESSONS_FETCH_DATA, fetchData);
  yield takeLatest(types.TEACHER_START_LESSONS, startLesson);
}
