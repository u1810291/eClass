import types from '../../../constants/action-types';

export const getCountries = (payload) => ({
  type: types.GET_COUNTRIES,
  payload
});

export const getCities = (payload) => ({
  type: types.GET_CITIES,
  payload
});

export const getReasons = (payload) => ({
  type: types.GET_REASONS,
  payload
});

export const setError = (payload) => ({
  type: types.SET_LIST_ERROR,
  payload
});
