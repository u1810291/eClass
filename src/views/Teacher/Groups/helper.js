/* eslint-disable no-console */
/* eslint-disable no-alert */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStudents } from '../../../redux/modules/teacher/groups/actions';

export const fetchStudents = (id) => {
  const dispatch = useDispatch();
  const {
    data, loading, error, total
  } = useSelector((state) => state.teacherGroupsReducers);
  useEffect(() => {
    dispatch(getStudents(id));
  }, [id]);
  console.log(data);
  return {
    data, total, error, loading
  };
};

export const toolTips = [
  {
    name: 'Students List',
    icon: 'payment',
    onClick: (id, { history }) => history.push(`/groups/list/${id}`, [id])
  }
];
