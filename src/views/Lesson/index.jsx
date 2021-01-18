import React from 'react';

import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const adminPage = (
    <Container>
      <Table />
    </Container>
  );

  const studentPage = (
    <Container>
      <Table />
    </Container>
  );

  const teacherPage = (
    <Container>
      <Table />
    </Container>
  );
  if (userInfo.role === FIVEPLUSADMIN) return adminPage;
  if (userInfo.role === TEACHER) return teacherPage;
  if (userInfo.role === STUDENT) return studentPage;
  return null;
};
