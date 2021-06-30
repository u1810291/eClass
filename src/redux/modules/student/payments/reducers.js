import types from '../../../../constants/action-types';

const defaultState = {
  methods: [],
  error: ''
};

const map = {
  [types.STUDENT_PAYMENTS_SET_METHODS]: (state, { payload }) => ({
    ...state,
    methods: payload
  }),
  [types.TABLE_STUDENT_QUIZES_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
