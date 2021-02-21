/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

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

export const header = [{
  Header: () => 'Address', // No header
  id: 'expander', // It needs an ID
  Cell: ({ row }) => (
    <span {...row.getToggleRowExpandedProps()}>
      {row.original.address}
    </span>
  ),
  SubCell: () => null
},
{
  Header: 'Confirmed',
  accessor: (d) => d.confirmed_by_admin
},
{
  Header: 'Date of birth',
  accessor: (d) => d.date_of_birth
},
{
  Header: 'Email',
  accessor: (d) => d.email
},
{
  Header: 'Username',
  accessor: (d) => d.username
},
{
  Header: 'First name',
  accessor: (d) => d.first_name
},
{
  Header: 'Last name',
  accessor: (d) => d.last_name
},
{
  Header: 'Middle name',
  accessor: (d) => d.middle_name
},
{
  Header: 'School number',
  accessor: (d) => d.school_number
},
{
  Header: 'Trial lessons',
  accessor: (d) => d.trial_lessons
}
];

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
  }

];
