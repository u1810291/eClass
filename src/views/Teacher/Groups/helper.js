/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getStudents } from '../../../redux/modules/teacher/groups/actions';
import {
  StudentsList
} from '../../../components/Groups';

const fetchStudents = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getStudents(id));
    }
  }, [id]);
};

export const toolTips = [
  {
    name: 'Students List',
    icon: 'payment',
    onClick: (id, { showFullScreen }) => {
      showFullScreen({
        title: 'Students List',
        body: () => <StudentsList fetchStudents={() => fetchStudents(id)} />
      });
    }
  }
];
