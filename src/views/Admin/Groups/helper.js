/* eslint-disable no-alert */
import CreateLesson from '../../../components/Groups/CreateLesson';

export const toolTips = [
  {
    name: 'Create lesson',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Add homework',
        body: () => <CreateLesson handleAdd={() => handleAdd(id)} />
      });
    }
  },
  {
    name: 'Delete group',
    icon: 'payment',
    onClick: () => {
      alert('Delete group');
    }
  },
  {
    name: 'Add student',
    icon: 'payment',
    onClick: () => {
      alert('Add student');
    }
  },
  {
    name: 'Delete student',
    icon: 'payment',
    onClick: () => {
      alert('Delete student');
    }
  }
];
