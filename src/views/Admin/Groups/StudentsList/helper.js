import { useEffect } from 'react';

// import * as Yup from 'yup';
// import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../../../../redux/modules/admin/groups/actions';

export const getGroupStudents = (id) => {
  const dispatch = useDispatch();
  const {
    data, loading, error, total
  } = useSelector((state) => state.adminGroupsReducers);
  useEffect(() => {
    dispatch(getStudents(id));
  }, [id]);
  return {
    data, total, error, loading
  };
};
