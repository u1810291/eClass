import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/student/exercise';
import {
  setData,
  setError
} from './actions';

import { dataSelector } from './selectors';

function* fetchData() {
  try {
    const res = yield service.getQuizes();
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* studentQuizesSaga() {
  yield takeLatest(types.TABLE_LESSON_FETCH_DATA, fetchData);
}
