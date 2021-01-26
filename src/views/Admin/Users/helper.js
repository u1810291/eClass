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
