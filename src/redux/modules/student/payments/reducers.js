import types from '../../../../constants/action-types';

const defaultState = {
  loading: false
};

const map = {
  [types.STUDENT_PAYMENTS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.TABLE_STUDENT_QUIZES_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
