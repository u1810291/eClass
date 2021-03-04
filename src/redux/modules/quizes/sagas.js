import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/teacher/exercise';
import {
  setData,
  setError,
  setTotal,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload: { user } }) {
  try {
    if (user) {
      const role = user.toLowerCase();
      const res = yield service.getQuizes(role);
      const { total, data } = dataSelector(res.data);
      yield put(setError(''));
      yield put(setData(data));
      yield put(setTotal(total));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setError(error.response.data.error_message));
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_QUIZES_FETCH_DATA, fetchData);
}
