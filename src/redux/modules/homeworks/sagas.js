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

function* fetchData({ payload }) {
  try {
    const { user, query } = payload;
    if (user) {
      const role = user.toLowerCase();
      const res = yield service.getHomeworks(role, query);
      const { total, data } = dataSelector(res.data);
      yield put(setError(''));
      yield put(setData(data));
      yield put(setTotal(total));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* homeworksSaga() {
  yield takeLatest(types.TABLE_ADMIN_HOMEWORKS_FETCH_DATA, fetchData);
}
