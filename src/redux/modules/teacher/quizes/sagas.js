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

function* fetchData() {
  yield put(setLoading(true));
  try {
    const res = yield service.getQuizes();
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* teacherQuizesSaga() {
  yield takeLatest(types.TABLE_TEACHER_QUIZES_FETCH_DATA, fetchData);
}
