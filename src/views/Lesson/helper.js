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
  SubCell: () => null // No expander on an expanded row
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
}];
