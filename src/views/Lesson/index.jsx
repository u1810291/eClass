import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';
import { useAsync } from '../../hooks/mounted';
import lesson from '../../services/lesson';

const AdminPage = ({ userInfo, data, setData }) => {
  const asyncTask = useAsync();
  const promise = lesson.getAcminLessons();
  useEffect(() => {
    asyncTask(promise)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [asyncTask]);
  return (
    <Container>
      <Table perms={userInfo.rights} data={data} />
    </Container>
  );
};

const StudentPage = ({ userInfo, data, setData }) => {
  const asyncTask = useAsync();
  const promise = lesson.getStudentLessons();
  useEffect(() => {
    asyncTask(promise)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [asyncTask]);
  return (
    <Container>
      <Table perms={userInfo.rights} data={data} />
    </Container>
  );
};

const TeacherPage = ({ userInfo, data, setData }) => {
  const asyncTask = useAsync();
  const promise = lesson.getTeacherLessons();

  useEffect(() => {
    asyncTask(promise)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [asyncTask]);
  return (
    <Container>
      <Table perms={userInfo.rights} data={data} />
    </Container>
  );
};
export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const [data, setData] = useState([]);

  if (userInfo.role === FIVEPLUSADMIN) {
    return (
      <AdminPage
        userInfo={userInfo}
        data={data}
        setData={setData}
      />
    );
  }
  if (userInfo.role === TEACHER) {
    return (
      <TeacherPage
        userInfo={userInfo}
        data={data}
        setData={setData}
      />
    );
  }
  if (userInfo.role === STUDENT) {
    return (
      <StudentPage
        userInfo={userInfo}
        data={data}
        setData={setData}
      />
    );
  }
  return null;
};
