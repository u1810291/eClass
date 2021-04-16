import types from '../../../../constants/action-types';

const defaultState = {
  data: [],
  single: {},
  loading: false,
  total: 0,
  error: ''
};

const map = {
  [types.TABLE_ADMIN_GROUPS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.TABLE_ADMIN_GROUPS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.TABLE_ADMIN_GROUPS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.TABLE_ADMIN_GROUPS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [types.TABLE_ADMIN_SET_SINGLE_GROUP]: (state, { payload }) => ({
    ...state,
    single: payload
  })

};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
