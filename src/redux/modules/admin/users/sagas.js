import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/users';
import tariffs from '../../../../services/admin/tariffs';
import {
  setData,
  setError,
  setTotal,
  setTariffs,
  setLoading,
  setSigleUser
} from './actions';

import { dataSelector, tariffSelector, singleUser } from './selectors';

function* fetchData({ payload, params }) {
  yield put(setLoading(true));
  try {
    const res = yield service.getUsers(payload, params);
    const { total, data } = dataSelector(payload, res.data);
    yield put(setError(''));
    yield put(setTotal(total));
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    if (error.response.data.error_message) {
      yield put(setError(error.response.data.error_message));
    } else {
      yield put(setError(error));
    }
  }
}

function* getSingleUser({ payload, params }) {
  try {
    const res = yield service.getAllSingleUser(payload, params);
    console.log(res);
    const { data } = singleUser(payload, res.data);
    yield put(setSigleUser(data));
  } catch (error) {
    if (error.response.data.error_message) {
      yield put(setError(error.response.data.error_message));
    } else {
      yield put(setError(error));
    }
  }
}

function* fetchTariffs(success) {
  try {
    const res = yield tariffs.getAll();
    const { data } = tariffSelector(res.data);
    yield put(setTariffs(data));
  } catch (error) {
    if (error.response) {
      success(error.response.data.error_message);
    } else {
      success(error);
    }
  }
}

function* topUpStudent({ payload, success }) {
  try {
    const res = yield service.topupStudent(payload);
    success(res.data);
  } catch (error) {
    if (error.response) {
      success(error.response.data.error_message);
    } else {
      success(error);
    }
  }
}

export default function* adminUsersSaga() {
  yield takeLatest(types.TABLE_ADMIN_STUDENTS_FETCH_DATA, fetchData);
  yield takeLatest(types.ADMIN_FETCH_TARIFFS, fetchTariffs);
  yield takeLatest(types.ADMIN_TOPUP_STUDENTS, topUpStudent);
  yield takeLatest(types.ADMIN_FETCH_SINGLE_USER, getSingleUser);
}
