import types from '../../../constants/action-types';
import { genericTypes } from './common';

const defaultState = {
  data: [],
  error: ''
};

const map = {};

genericTypes.forEach(({ key }) => {
  map[types[`${key}_SET_DATA`]] = (state, { payload }) => ({
    ...state,
    data: payload
  });
  map[types[`${key}_ERROR`]] = (state, { payload }) => ({
    ...state,
    error: payload
  });
});

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
