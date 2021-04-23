import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/exercise';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector, submitHomeworkSelector } from './selectors';

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

function* submitHomework({ payload, success }) {
  try {
    console.log(payload);
    const { data } = submitHomeworkSelector(payload.values);
    const res = yield service.submitExercise(payload.id, data);
    yield put(setError(''));
    success(res);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }
}

export default function* studentHomeworksSaga() {
  yield takeLatest(types.TABLE_STUDENT_HOMEWORKS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_STUDENT_HOMEWORKS_ADD, submitHomework);
}
