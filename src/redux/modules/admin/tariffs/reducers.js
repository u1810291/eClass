import types from '../../../../constants/action-types';

const defaultState = {
  data: [],
  toading: false,
  total: 0,
  error: ''
};

const map = {
  [types.ADMIN_TARIFFS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.ADMIN_TARIFFS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.ADMIN_TARIFFS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.ADMIN_TARIFFS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
