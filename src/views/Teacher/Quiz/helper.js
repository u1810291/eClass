import { deleteExercise, markExercise } from '../../../redux/modules/teacher/homeworks/actions';
import service from '../../../services/teacher/exercise';

export const toolTips = [
  {
    name: 'Delete',
    icon: 'payment',
    onClick: () => deleteExercise()
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
