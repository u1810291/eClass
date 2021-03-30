/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
import React from 'react';
import Topup from './Topup';

export const options = [
  {
    id: 1,
    value: 'Student'
  }, {
    id: 2,
    value: 'Teacher'
  }, {
    id: 3,
    value: 'Admin'
  }
];

export const adminToolTips = [
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
  }

];

export const teacherToolTips = [
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
  }

];

export const studentToolTips = [
  {
    name: 'Topup',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Top up student',
        body: () => <Topup id={id} />
      });
    }
  },
  {
    name: 'Edit',
    icon: 'payment',
    onClick: () => {
      alert('Edit');
    }
  },
  {
    name: 'Delete',
    icon: 'payment',
    onClick: () => {
      alert('Delete');
    }
  },
  {
    name: 'Restore',
    icon: 'payment',
    onClick: () => {
      alert('Restore');
    }
  }
];

export function toolTips(userType) {
  if (userType == 1) {
    return { tooltips: studentToolTips };
  }
  if (userType == 2) {
    return { tooltips: teacherToolTips };
  }
  if (userType == 3) {
    return { tooltips: adminToolTips };
  }
  return { tooltips: null };
}
