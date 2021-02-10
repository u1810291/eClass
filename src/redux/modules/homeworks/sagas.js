import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/teacher/exercise';
import {
  setData,
  setError,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload: { user, id } }) {
  try {
    console.log(user);
    const role = user.toLowerCase();
    const res = yield service.getHomeworks(role, id);
    console.log(res);
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error.message));
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_HOMEWORS_FETCH_DATA, fetchData);
}
