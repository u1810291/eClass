import React from 'react';

import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';

export const AdminPage = ({ userInfo, data }) => (
  <Container>
    <Table perms={userInfo.rights} data={data} />
  </Container>
);
export const StudentPage = ({ userInfo, data }) => (
  <Container>
    <Table perms={userInfo.rights} data={data} />
  </Container>
);

export const TeacherPage = ({ userInfo, data }) => (
  <Container>
    <Table perms={userInfo.rights} data={data} />
  </Container>
);
export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const {
    loading, data, total, error
  } = useSelector((state) => state.studentLessonsReducers);

  if (userInfo.role === FIVEPLUSADMIN) {
    return (
      <AdminPage
        userInfo={userInfo}
        data={data}
      />
    );
  }
  if (userInfo.role === TEACHER) {
    return (
      <TeacherPage
        userInfo={userInfo}
        data={data}
      />
    );
  }

  if (userInfo.role === STUDENT) {
    return (
      <StudentPage
        loading={loading}
        total={total}
        error={error}
        userInfo={userInfo}
        data={data}
      />
    );
  }
  return null;
};
