import types from '../../../../constants/action-types';

const defaultState = {
  data: [],
  loading: false,
  total: 0,
  error: ''
};

const map = {
  [types.TABLE_TEACHER_LESSONS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.TABLE_TEACHER_LESSONS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.TABLE_TEACHER_LESSONS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  }),
  [types.TABLE_TEACHER_LESSONS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  }),

  [types.TABLE_TEACHER_ATTENDANCE_CREATE_EVENT]: (state, { event }) => ({
    ...state,
    events: [...state.events, event]
  }),
  [types.TABLE_TEACHER_ATTENDANCE_UPDATE_EVENTS]: (state, { events }) => ({
    ...state,
    events
  }),
  [types.TABLE_TEACHER_ATTENDANCE_GET_EVENT]: (state, { event }) => ({
    ...state,
    singleEvent: event
  }),
  [types.TABLE_TEACHER_ATTENDANCE_UPDATE_EVENT]: (state, { event }) => ({
    ...state,
    events: [
      ...state.events.filter((item) => item.id !== event.id),
      { ...event }
    ]
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
