import types from '../../../../constants/action-types';

const defaultState = {
  data: [],
  loading: false,
  total: 0,
  error: ''
};

const map = {
  [types.ADMIN_ZOOM_ACCOUNTS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.ADMIN_ZOOM_ACCOUNTS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.ADMIN_ZOOM_ACCOUNTS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.ADMIN_ZOOM_ACCOUNTS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
