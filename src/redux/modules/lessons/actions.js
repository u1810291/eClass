import types from '../../../constants/action-types';

export const setDataT = (payload) => ({ type: types.LESSON_TEACHER_SET_DATA, payload });
export const setErrorT = (payload) => ({ type: types.LESSON_TEACHER_ERROR, payload });
export const teacherSign = (payload) => ({
  type: types.LESSON_TEACHER_FETCH_DATA,
  payload
});
export const setDataS = (payload) => ({ type: types.LESSON_STUDENT_SET_DATA, payload });
export const setErrorS = (payload) => ({ type: types.LESSON_STUDENT_ERROR, payload });
export const studentSign = (payload) => ({
  type: types.LESSON_STUDENT_FETCH_DATA,
  payload
});
