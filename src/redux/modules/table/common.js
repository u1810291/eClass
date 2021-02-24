import React from 'react';
import * as types from '../../../constants/global';

export const studentLessonsHeader = [
  {
    id: 1,
    Header: 'Date',
    accessor: 'date',
    show: true
  },
  {
    id: 2,
    Header: 'Time',
    accessor: 'time',
    show: true
  },
  {
    id: 3,
    Header: 'Duration',
    accessor: 'duration',
    show: true
  },
  {
    id: 4,
    Header: 'Teacher',
    accessor: 'teacher',
    type: 'user',
    show: true
  },
  {
    id: 5,
    Header: 'Subject',
    accessor: 'subject',
    disableSortBy: true,
    show: true
  },
  {
    id: 6,
    Header: 'Link',
    accessor: 'link',
    type: 'join',
    disableSortBy: true,
    show: true
  }
];

export const teacherLessonsHeader = [
  {
    id: 1,
    Header: 'Date',
    accessor: 'scheduled_start',
    show: true
  },
  {
    id: 2,
    Header: 'Started at',
    accessor: 'started_at',
    SubCell: 'attendances',
    show: true
  },
  {
    id: 3,
    Header: 'Group',
    accessor: 'group_name',
    SubCell: ['group_description', 'students'],
    show: true
  },
  {
    id: 4,
    Header: 'Duration',
    accessor: 'duration',
    show: true
  },
  {
    id: 5,
    Header: 'Subject',
    accessor: 'subject_name',
    type: 'user',
    disableSortBy: true,
    show: true
  },
  {
    id: 6,
    Header: 'Join',
    accessor: 'link',
    type: 'join',
    disableSortBy: true,
    show: true
  },
  {
    id: 7,
    Header: 'Start lesson',
    accessor: 'link',
    type: 'start',
    disableSortBy: true,
    SubCell: ['meeting_id', 'meeting_password'],
    show: true
  }
];
export const adminLessonsHeader = [
  {
    id: 1,
    Header: 'Date',
    accessor: 'rescheduled',
    show: true
  },
  {
    id: 2,
    Header: 'Scheduled start',
    accessor: 'scheduled_start',
    show: true
  },
  {
    id: 3,
    Header: 'Time to start',
    accessor: 'time_to_start',
    show: true
  }
];

export const usersHeader = [
  {
    id: 1,
    Header: 'ID',
    accessor: 'id',
    show: true
  },
  {
    id: 2,
    Header: 'Full name',
    accessor: 'first_name',
    show: true
  },
  {
    id: 3,
    Header: 'Email',
    accessor: 'email',
    type: 'email',
    show: true
  },
  {
    id: 4,
    Header: 'Date of birth',
    accessor: 'dateOfBirth',
    align: 'end',
    suffix: 'pcs',
    show: true
  },
  {
    id: 5,
    Header: 'Phones',
    accessor: 'school_number',
    align: 'end',
    show: true
  },
  {
    id: 6,
    Header: 'Address',
    accessor: 'address',
    align: 'end',
    show: true
  }];

export const adminHomeworksHeader = [{
  id: 'expander',
  Header: 'Phones',
  accessor: 'school_number',
  align: 'end',
  show: true,
  Cell: ({ row }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <span {...row.getToggleRowExpandedProps()}>
      {row.isExpanded ? 'v' : '>'}
    </span>
  )
},
{
  id: 1,
  accessor: 'rescheduled',
  align: 'end',
  show: true,
  Header: 'Rescheduled'
},
{
  id: 2,
  Header: 'Scheduled start',
  accessor: 'scheduled_start',
  align: 'end',
  show: true
},
{
  id: 3,
  Header: 'Time to start',
  accessor: 'time_to_start',
  align: 'end',
  show: true
}
];

export const studentHomeworksHeader = [
  {
    Header: 'Date',
    accessor: 'date',
    id: 1,
    align: 'end',
    show: true
  },
  {
    Header: 'Subject',
    accessor: 'subject',
    id: 2,
    align: 'end',
    show: true
  },
  {
    Header: 'Description',
    accessor: 'description',
    id: 3,
    align: 'end',
    show: true
  },
  {
    Header: 'Group',
    accessor: 'group group_name',
    id: 4,
    align: 'end',
    show: true
  },
  {
    Header: 'File',
    accessor: 'files',
    id: 5,
    align: 'end',
    show: true,
    type: 'download'
  },
  {
    Header: 'Send homework',
    accessor: 'teacher',
    id: 6,
    align: 'end',
    type: 'upload',
    show: true
  },
  {
    Header: 'Deadline',
    accessor: 'deadline',
    id: 7,
    align: 'end',
    show: true
  }
];

export const teacherHomeworksHeader = [{
  Header: '',
  id: 'expander',
  Cell: ({ row }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <span {...row.getToggleRowExpandedProps()}>
      {row.isExpanded ? 'v' : '>'}
    </span>
  )
},
{
  Header: 'Date',
  accessor: 'date',
  id: 1,
  align: 'end',
  show: true
},
{
  Header: 'Time',
  accessor: 'time',
  id: 2,
  align: 'end',
  show: true
},
{
  Header: 'Duration',
  accessor: 'duration',
  id: 3,
  align: 'end',
  show: true
},
{
  Header: 'Teacher',
  accessor: 'teacher',
  id: 4,
  align: 'end',
  show: true
},
{
  Header: 'Subject',
  accessor: 'subject',
  id: 5,
  align: 'end',
  show: true
},
{
  Header: 'Link',
  accessor: 'link',
  id: 6,
  align: 'end',
  show: true
}
];

export const genericTypes = [
  {
    key: types.USERS,
    headerName: 'usersHeader'
  },
  {
    key: types.GROUPS,
    headerName: 'groupsHeader'
  },
  {
    key: types.STUDENT_HOMEWORKS,
    headerName: 'studentHomeworksHeader'
  },
  {
    key: types.TEACHER_HOMEWORKS,
    headerName: 'teacherHomeworksHeader'
  },
  {
    key: types.ADMIN_HOMEWORKS,
    headerName: 'adminHomeworksHeader'
  },
  {
    key: types.STUDENT_LESSONS,
    headerName: 'studentLessonsHeader'
  },
  {
    key: types.TEACHER_LESSONS,
    headerName: 'teacherLessonsHeader'
  },
  {
    key: types.ADMIN_LESSONS,
    headerName: 'adminLessonsHeader'
  },
  {
    key: types.LOGS,
    headerName: 'logsHeader'
  },
  {
    key: types.QUIZES,
    headerName: 'quizesHeader'
  }
];
