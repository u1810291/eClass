/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MeetingWindow from '../../../components/MeetingWindow';
import { joinLesson } from '../../../redux/modules/student/lessons/actions';

export const toolTips = [
  {
    name: 'Join',
    icon: 'payment',
    onClick: (id, {
      dispatch, showBlured, student, students
    }) => {
      dispatch(joinLesson(id, (response) => {
        student(id);
        showBlured({
          title: 'Zoom Meeting',
          body: () => <MeetingWindow data={students} />
        });
        if (response) { alert('Lesson started!'); }
        return response;
      }));
    }
  },
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
