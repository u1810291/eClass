/* eslint-disable no-alert */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteExercise, getSingle } from '../../../redux/modules/teacher/homeworks/actions';
import HomeworksView from '../../../components/Homeworks/Teacher/HomeworksView';

const homeworks = (id) => {
  const dispatch = useDispatch();
  const { single } = useSelector((state) => state.teacherHomeworksReducers);
  useEffect(() => {
    dispatch(getSingle(id));
  }, []);
  return { single };
};
export const toolTips = [
  {
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { dispatch }) => dispatch(deleteExercise(id, (res) => { if (res) alert('Succesfully deleted'); }))
  },
  {
    name: 'View',
    icon: 'payment',
    onClick: (id, { showFullScreen }) => showFullScreen({
      title: 'Homeworks',
      body: () => <HomeworksView id={id} getHomeworks={homeworks} />
    })
  }
];
