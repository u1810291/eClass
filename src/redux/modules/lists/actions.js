import types from '../../../constants/action-types';

export const setData = (payload, type) => ({ type: types[`${type}_SET_DATA`], payload });
export const setError = (payload, type) => ({ type: types[`${type}_ERROR`], payload });

export const getCountries = (payload) => ({
  type: types.COUNTRIES_FETCH_DATA,
  payload
});

export const getCities = (payload) => ({
  type: types.CITIES_FETCH_DATA,
  payload
});

export const getReasons = (payload) => ({
  type: types.REASONS_FETCH_DATA,
  payload
});
