import * as types from '../../../constants/tables';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../../constants/roles';

export const lessonsHeader = [
  {
    id: 1,
    Header: 'Date',
    accessor: 'date',
    roles: [FIVEPLUSADMIN, STUDENT, TEACHER],
    show: true
  },
  {
    id: 2,
    Header: 'Time',
    accessor: 'time',
    roles: [FIVEPLUSADMIN, STUDENT, TEACHER],
    show: true
  },
  {
    id: 3,
    Header: 'Duration',
    accessor: 'duration',
    roles: [STUDENT, TEACHER],
    show: true
  },
  {
    id: 4,
    Header: 'Teacher',
    accessor: 'teacher',
    type: 'user',
    roles: [STUDENT, TEACHER],
    show: true
  },
  {
    id: 5,
    Header: 'Subject',
    accessor: 'subject',
    disableSortBy: true,
    roles: [STUDENT, TEACHER],
    show: true
  },
  {
    id: 6,
    Header: 'Link',
    accessor: 'link',
    type: 'link',
    disableSortBy: true,
    roles: [TEACHER],
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
    accessor: 'fullname',
    type: 'user',
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
    accessor: 'phones',
    align: 'end',
    prefix: '+',
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
    key: types.LESSONS,
    headerName: 'lessonsHeader'
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
