import types from '../../../constants/action-types';
import * as initial from './common';

const defaultState = {
  usersHeader: JSON.parse(localStorage.getItem('usersHeader')) || initial.usersHeader,

  studentLessonsHeader: JSON.parse(localStorage.getItem('studentLessonsHeader')) || initial.studentLessonsHeader,
  teacherLessonsHeader: JSON.parse(localStorage.getItem('teacherLessonsHeader')) || initial.teacherLessonsHeader,
  adminLessonsHeader: JSON.parse(localStorage.getItem('adminLessonsHeader')) || initial.adminLessonsHeader,

  studentHomeworksHeader: JSON.parse(localStorage.getItem('studentHomeworksHeader')) || initial.studentHomeworksHeader,
  adminHomeworksHeader: JSON.parse(localStorage.getItem('adminHomeworksHeader')) || initial.adminHomeworksHeader,
  teacherHomeworksHeader: JSON.parse(localStorage.getItem('teacherHomeworksHeader')) || initial.teacherHomeworksHeader,

  adminQuizesHeader: JSON.parse(localStorage.getItem('adminQuizesHeader')) || initial.adminQuizesHeader,
  teacherQuizesHeader: JSON.parse(localStorage.getItem('teacherQuizesHeader')) || initial.teacherQuizesHeader,
  studentQuizesHeader: JSON.parse(localStorage.getItem('studentQuizesHeader')) || initial.studentQuizesHeader,

  groupsHeader: JSON.parse(localStorage.getItem('groupsHeader')) || initial.groupsHeader,
  adminTariffsHeader: JSON.parse(localStorage.getItem('adminTariffsHeader')) || initial.adminTariffsHeader,
  adminAccountsHeader: JSON.parse(localStorage.getItem('adminAccountsHeader')) || initial.adminAccountsHeader
};
const map = {};

initial.genericTypes.forEach(({ key, headerName }) => {
  map[types[`TABLE_${key}_HEADER_SET`]] = (state, { headers }) => ({
    ...state,
    [headerName]: headers
  });
  map[types[`TABLE_${key}_HEADER_UPDATE`]] = (state, { headerId }) => ({
    ...state,
    [headerName]: state[headerName].map((header) => (header.id === headerId
      ? {
        ...header,
        show: !header.show
      }
      : header))
  });
  map[types[`TABLE_${key}_HEADER_SAVE`]] = (state) => {
    localStorage.setItem(headerName, JSON.stringify(state[headerName]));
    return state;
  };
  map[types[`TABLE_${key}_HEADER_RESET`]] = (state) => {
    localStorage.removeItem(headerName);
    return { ...state, [headerName]: initial[headerName] };
  };
});

// eslint-disable-next-line max-len
export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
