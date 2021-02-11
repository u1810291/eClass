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
  Header: 'Scheduled start',
  accessor: (d) => d.scheduled_start
},
{
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
  Header: 'Subject',
  accessor: (d) => d.subject
},
{
  Header: 'Description',
  accessor: (d) => d.time
},
{
  Header: 'File',
  accessor: (d) => d.duration
},
{
  Header: 'Send homework',
  accessor: (d) => d.teacher
},
{
  Header: 'Deadline',
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
  Header: 'Time',
  accessor: (d) => d.time
},
{
  Header: 'Duration',
  accessor: (d) => d.duration
},
{
  Header: 'Teacher',
  accessor: (d) => d.teacher
},
{
  Header: 'Subject',
  accessor: (d) => d.subject
},
{
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
