import types from '../../../../constants/action-types';

const defaultState = {
  data: [],
  loading: false,
  total: 0,
  error: '',
  tariffs: [],
  single: []
};

const map = {
  [types.ADMIN_SINGLE_USER_SET_DATA]: (state, { payload }) => ({
    ...state,
    single: payload
  }),
  [types.ADMIN_SET_TARIFFS]: (state, { payload }) => ({
    ...state,
    tariffs: payload
  }),
  [types.TABLE_ADMIN_STUDENTS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.TABLE_ADMIN_STUDENTS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.TABLE_ADMIN_STUDENTS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.TABLE_ADMIN_STUDENTS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
