/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export const adminHeader = [{
  Header: () => null, // No header
  id: 'expander', // It needs an ID
  Cell: ({ row }) => (
    <span {...row.getToggleRowExpandedProps()}>
      {row.isExpanded ? 'v' : '>'}
    </span>
  ),
  SubCell: () => null
},
{
  id: 1,
  Header: 'Rescheduled',
  accessor: (d) => d.rescheduled,
  SubCell: (cellProps) => (
    <>
      🥳
      {cellProps.value}
      {' '}
      🎉
    </>
  )
},
{
  id: 2,
  Header: 'Scheduled start',
  accessor: (d) => d.scheduled_start
},
{
  id: 3,
  Header: 'Time to start',
  accessor: (d) => d.time_to_start
}
];

export const studentHeader = [{
  Header: () => null, // No header
  id: 'expander', // It needs an ID
  Cell: ({ row }) => (
    <span {...row.getToggleRowExpandedProps()}>
      {row.isExpanded ? 'v' : '>'}
    </span>
  ),
  SubCell: () => null
},
{
  id: 1,
  Header: 'Date',
  accessor: (d) => d.date,
  SubCell: (cellProps) => (
    <>
      🥳
      {cellProps.value}
      {' '}
      🎉
    </>
  )
},
{
  id: 2,
  Header: 'Time',
  accessor: (d) => d.time
},
{
  id: 3,
  Header: 'Duration',
  accessor: (d) => d.duration
},
{
  id: 4,
  Header: 'Teacher',
  accessor: (d) => d.teacher
},
{
  id: 5,
  Header: 'Subject',
  accessor: (d) => d.subject
},
{
  id: 6,
  Header: 'Link',
  accessor: (d) => d.link
}
];

export const teacherHeader = [{
  Header: () => null, // No header
  id: 'expander', // It needs an ID
  Cell: ({ row }) => (
    <span {...row.getToggleRowExpandedProps()}>
      {row.isExpanded ? 'v' : '>'}
    </span>
  ),
  SubCell: () => null
},
{
  id: 1,
  Header: 'Date',
  accessor: (d) => d.date,
  SubCell: (cellProps) => (
    <>
      🥳
      {cellProps.value}
      {' '}
      🎉
    </>
  )
},
{
  id: 2,
  Header: 'Time',
  accessor: (d) => d.time
},
{
  id: 3,
  Header: 'Duration',
  accessor: (d) => d.duration
},
{
  id: 4,
  Header: 'Teacher',
  accessor: (d) => d.teacher
},
{
  id: 5,
  Header: 'Subject',
  accessor: (d) => d.subject
},
{
  id: 6,
  Header: 'Link',
  accessor: (d) => d.link
}
];

export const getHeader = (userInfo) => {
  switch (userInfo) {
  case userInfo.role === 'STUDENT' || userInfo.role === 'student':
    return studentHeader;
  case userInfo.role === 'TEACHER' || userInfo.role === 'teacher':
    return teacherHeader;
  case userInfo.role === 'ADMIN' || userInfo.role === 'admin':
    return adminHeader;
  default:
    return studentHeader;
  }
};
