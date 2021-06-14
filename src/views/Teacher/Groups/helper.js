/* eslint-disable no-console */
/* eslint-disable no-alert */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStudents } from '../../../redux/modules/teacher/groups/actions';

export const fetchStudents = (id) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.teacherGroupsReducers);
  useEffect(() => {
    console.log(id);
    if (id) {
      dispatch(getStudents(id));
    }
  }, [id]);
  return { data };
};

export const toolTips = [
  {
    name: 'Students List',
    icon: 'payment',
    onClick: (id, { history }) => history.push(`/groups/list/${id}`, [id])
  }
];
