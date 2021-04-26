import types from '../../../../constants/action-types';

const defaultState = {
  data: [],
  loading: false,
  total: 0,
  events: [],
  error: ''
};

const map = {
  [types.TABLE_STUDENT_LESSONS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.TABLE_STUDENT_LESSONS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.TABLE_STUDENT_LESSONS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.TABLE_STUDENT_LESSONS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [types.STUDENT_ATTENDANCE_CREATE_EVENT]: (state, { event }) => ({
    ...state,
    events: [...state.events, event]
  }),
  [types.STUDENT_ATTENDANCE_UPDATE_EVENTS]: (state, { events }) => ({
    ...state,
    events
  }),
  [types.STUDENT_ATTENDANCE_GET_EVENT]: (state, { event }) => ({ ...state, singleEvent: event }),
  [types.STUDENT_ATTENDANCE_UPDATE_EVENT]: (state, { event }) => ({
    ...state,
    events: [
      ...state.events.filter((item) => item.id !== event.id),
      { ...event }
    ]
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
