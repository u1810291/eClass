import types from '../../../../constants/action-types';

export const setLoading = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_SET_LOADING, payload });
export const setData = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_SET_DATA, payload });
export const setTotal = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_SET_TOTAL, payload });
export const setError = (payload) => ({ type: types.TABLE_ADMIN_GROUPS_ERROR, payload });

export const fetchData = (payload) => ({
  type: types.TABLE_ADMIN_GROUPS_FETCH_DATA,
  payload
});

export const getGroupById = (payload) => ({
  type: types.TABLE_ADMIN_GROUPS_FETCH_DATA_BY_ID,
  payload
});

export const addGroup = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_CREATE_GROUP,
  payload,
  success
});
export const editGroup = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_EDIT_GROUP,
  payload,
  success
});

export const createLesson = (payload, success) => ({
  type: types.TABLE_ADMIN_GROUPS_CREATE_LESSON,
  payload,
  success
});
