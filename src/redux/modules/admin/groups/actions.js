import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_SET_DATA, payload });
export const setStudents = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_SET_STUDENTS, payload });
export const setTotal = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_ERROR, payload });

export const fetchData = (payload) => ({
  type: types.TABLE_ADMIN_GROUPS_FETCH_DATA,
  payload
});

export const getStudents = (payload) => ({
  type: types.TABLE_ADMIN_GROUPS_STUDENTS_FETCH,
  payload
});

export const getSingle = (payload) => ({
  type: types.TABLE_ADMIN_GROUPS_FETCH_SINGLE_DATA,
  payload
});

export const setSingle = (payload) => ({
  type: types.TABLE_ADMIN_SET_SINGLE_GROUP,
  payload
});

export const addGroup = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_CREATE_GROUP,
  payload,
  success
});

export const addStudent = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_ADD_STUDENT_GROUP,
  payload,
  success
});

export const editGroup = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_EDIT_GROUP,
  payload,
  success
});

export const deleteGroup = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_DELETE_GROUP,
  payload,
  success
});

export const removeStudent = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_DELETE_STUDENT,
  payload,
  success
});

export const createLesson = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_CREATE_LESSON,
  payload,
  success
});
