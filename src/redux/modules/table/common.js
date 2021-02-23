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
    key: types.HOMEWORKS,
    headerName: 'homeworksHeader'
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
