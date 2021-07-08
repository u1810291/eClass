/* eslint-disable no-alert */
import React from 'react';
import { deleteExercise } from '../../../redux/modules/teacher/homeworks/actions';
import HomeworksView from '../../../components/Homeworks/Teacher/HomeworksView';

export const toolTips = [
  {
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { dispatch }) => dispatch(deleteExercise(id, (res) => { if (res) alert('Succesfully deleted'); }))
  },
  {
    name: 'View',
    icon: 'payment',
    onClick: (id, { dispatch, showFullScreen }) => {
      dispatch(showFullScreen({
        title: 'Homeworks',
        body: () => <HomeworksView id={id} />
      }));
    }
  }
];
