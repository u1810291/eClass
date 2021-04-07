/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/tariffs';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData() {
  yield put(setLoading(true));
  try {
    const res = yield service.getAll();
    console.log(res);
    const { total, data } = dataSelector(res.data);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

function* createTariff({ payload, success }) {
  try {
    const res = yield service.createTariff(payload);
    console.log(res);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* updateTariff({ payload, success }) {
  try {
    const res = yield service.updateTariffIdInBody(payload);
    console.log(res);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* deleteTariff({ payload, success }) {
  try {
    const res = yield service.deleteTariffIdInParams(payload);
    console.log(res);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

function* deleteTariffName({ payload, success }) {
  try {
    const res = yield service.deleteTariffNameIdInParams(payload);
    console.log(res);
    success(res);
  } catch (error) {
    console.log(error);
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.ADMIN_TARIFFS_FETCH_DATA, fetchData);
  yield takeLatest(types.ADMIN_CREATE_TARIFF_DATA, createTariff);
  yield takeLatest(types.ADMIN_UPDATE_TARIFF_DATA, updateTariff);
  yield takeLatest(types.ADMIN_DELETE_TARIFF_DATA, deleteTariff);
  yield takeLatest(types.ADMIN_DELETE_TARIFF_NAME_DATA, deleteTariffName);
}
