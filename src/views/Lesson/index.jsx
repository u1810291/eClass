import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';
import { fetchData } from '../../redux/modules/student/lessons/actions';

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
  const { data } = useSelector((state) => state.studentLessonsReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);

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
        userInfo={userInfo}
        data={data}
      />
    );
  }
  return null;
};
