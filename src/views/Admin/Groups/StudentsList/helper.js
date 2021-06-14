/* eslint-disable camelcase */
import { useEffect } from 'react';

// import * as Yup from 'yup';
// import { useFormik } from 'formik';
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

export const deleteStudent = (dispatch, id, student_id) => dispatch(removeStudent({
  id,
  student_id
},
(res) => {
  console.log(res);
}));
