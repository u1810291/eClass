import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/users';
import {
  setData,
  setError,
  setLoading
} from './actions';

import { dataSelector } from './selectors';

const getType = () => {
  // eslint-disable-next-line no-nested-ternary
  const value = options.map((i) => (i.id === userType ? i.value.length
    ? `${i.value.charAt(0).toLowerCase()}${i.value.slice(1, i.value.length)}`
    : '' : ''));
  return value.filter((i) => i !== '') || null;
};

function* fetchData(user) {
  try {
    const res = yield service.getUsers(getType().length === 0 ? 'student' : getType());
    console.log(res);
    const { data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.TABLE_ADMIN_STUDENTS_FETCH_DATA, fetchData);
}
