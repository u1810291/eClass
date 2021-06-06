/* eslint-disable no-alert */
import { deleteExercise, markExercise } from '../../../redux/modules/teacher/homeworks/actions';
import service from '../../../services/teacher/exercise';

export const toolTips = [
  {
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { dispatch }) => dispatch(deleteExercise(id, (res) => { if (res) alert('Succesfully deleted'); }))
  },
  {
    name: 'Mark',
    icon: 'payment',
    onClick: () => markExercise()
  },
  {
    name: 'Mark upoloaded',
    icon: 'payment',
    onClick: () => service.markExerciseToUploaded()
  }
];
