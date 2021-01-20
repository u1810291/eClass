import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';
import { fetchData as user } from '../../redux/modules/student/lessons/actions';
import { fetchData as teacher } from '../../redux/modules/teacher/lessons/actions';
import { fetchData as admin } from '../../redux/modules/admin/lessons/actions';

const AdminPage = ({ userInfo }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.adminLessonsReducers);
  useEffect(() => {
    dispatch(admin());
  }, [admin]);

  return (
    <Container>
      <Table perms={userInfo.rights} data={data} />
    </Container>
  );
};
const StudentPage = ({ userInfo }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.studentLessonsReducers);
  useEffect(() => {
    dispatch(user());
  }, [user]);

  return (
    <Container>
      <Table perms={userInfo.rights} data={data} />
    </Container>
  );
};

const TeacherPage = ({ userInfo }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.teacherLessonsReducers);

  useEffect(() => {
    dispatch(teacher());
  }, [teacher]);

  return (
    <Container>
      <Table perms={userInfo.rights} data={data} />
    </Container>
  );
};
export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);

  if (userInfo.role === FIVEPLUSADMIN) {
    return (
      <AdminPage
        userInfo={userInfo}
      />
    );
  }
  if (userInfo.role === TEACHER) {
    return (
      <TeacherPage
        userInfo={userInfo}
      />
    );
  }
  if (userInfo.role === STUDENT) {
    return (
      <StudentPage
        userInfo={userInfo}
      />
    );
  }
  return <></>;
};
