/* eslint-disable camelcase */
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getStudents, getSingle, removeStudent } from '../../../../redux/modules/admin/groups/actions';

export const getGroupStudents = (id) => {
  const dispatch = useDispatch();
  const {
    single, students, loading, error, total
  } = useSelector((state) => state.adminGroupsReducers);
  useEffect(() => {
    dispatch(getStudents(id));
    dispatch(getSingle(id));
  }, [id]);
  return {
    single, students, total, error, loading
  };
};

export const deleteStudent = (dispatch, id, student_id) => {
  dispatch(removeStudent({
    id,
    student_id
  },
  (res) => {
  // eslint-disable-next-line no-console
    console.log(res);
  }));
  dispatch(getStudents(id));
};
