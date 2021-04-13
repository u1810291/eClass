/* eslint-disable no-console */
import { takeLatest, put, delay } from 'redux-saga/effects';
import types from '../../../../constants/action-types';
import service from '../../../../services/admin/tariffs';
import {
  setData,
  setError,
  setLoading,
  setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    if (payload.isSearch) yield delay(500);
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

function* createTariff({ payload, success }) {
  try {
    const res = yield service.createTariff(payload);
    success(res);
  } catch (error) {
    success(error);
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
    success(res);
  } catch (error) {
    console.log(error);
    success(error);
  }
}

function* deleteTariffName({ payload, success }) {
  try {
    const res = yield service.deleteTariffNameIdInParams(payload);
    success(res);
  } catch (error) {
    console.log(error);
    success(error);
  }
}

export default function* lessonsSaga() {
  yield takeLatest(types.ADMIN_TARIFFS_FETCH_DATA, fetchData);
  yield takeLatest(types.ADMIN_CREATE_TARIFF_DATA, createTariff);
  yield takeLatest(types.ADMIN_UPDATE_TARIFF_DATA, updateTariff);
  yield takeLatest(types.ADMIN_DELETE_TARIFF_DATA, deleteTariff);
  yield takeLatest(types.ADMIN_DELETE_TARIFF_NAME_DATA, deleteTariffName);
}
