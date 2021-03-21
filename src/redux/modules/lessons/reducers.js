import types from '../../../constants/action-types';

const defaultState = {
  teacherData: [],
  teacherError: '',
  studentData: [],
  studentError: ''
};

const map = {
  [types.LESSON_TEACHER_SET_DATA]: (state, { payload }) => ({
    ...state,
    teacherData: payload
  }),
  [types.LESSON_TEACHER_ERROR]: (state, { payload }) => ({
    ...state,
    teacherError: payload
  }),
  [types.LESSON_STUDENT_SET_DATA]: (state, { payload }) => ({
    ...state,
    studentData: payload
  }),
  [types.LESSON_STUDENT_ERROR]: (state, { payload }) => ({
    ...state,
    studentError: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
