/* eslint-disable no-alert */
/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/student/group';
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
    const res = yield service.getGroups(payload);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    console.log(data);
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}
export default function* groupsSaga() {
  yield takeLatest(types.TABLE_STUDENT_GROUPS_FETCH_DATA, fetchData);
}
