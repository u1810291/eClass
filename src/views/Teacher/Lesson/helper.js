/* eslint-disable no-alert */
import AddHomework from '../../../components/Lesson/AddHomework';

export const toolTips = [
  {
    name: 'Cancel',
    icon: 'payment',
    onClick: () => {
      alert('Cancel');
    }
  },

  {
    name: 'Reschedule',
    icon: 'payment',
    onClick: () => {
      alert('Reschedule');
    }
  },

  {
    name: 'Response',
    icon: 'payment',
    onClick: () => {
      alert('Response Reschedule');
    }
  },

  {
    name: 'Reject Reschedule',
    icon: 'payment',
    onClick: () => {
      alert('Reject Reschedule');
    }
  },

  {
    name: 'Add Rating',
    icon: 'payment',
    onClick: () => {
      alert('Add Rating');
    }
  },

  {
    name: 'Revoke Rating',
    icon: 'payment',
    onClick: () => {
      alert('Revoke Rating');
    }
  },

  {
    name: 'Add homework',
    icon: 'payment',
    onClick: (_, { showBlured }) => {
      showBlured({
        title: 'Add homework',
        body: AddHomework
      });
    }
  },

  {
    name: 'Add controlwork',
    icon: 'payment',
    onClick: (id) => {
      alert(`Revoke Rating ${id}`);
    }
  }

];
