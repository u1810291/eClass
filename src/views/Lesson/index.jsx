import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';
import { useAsync } from '../../hooks/mounted';
import lesson from '../../services/lesson';

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
  const [data, setData] = useState([]);
  const asyncTask = useAsync();

  if (userInfo.role === FIVEPLUSADMIN) {
    const promise = lesson.getAcminLessons();
    asyncTask(promise)
      .then((res) => setData(res))
      .catch((err) => console.log(err));

    return (
      <AdminPage
        userInfo={userInfo}
        data={data}
        setData={setData}
      />
    );
  }
  if (userInfo.role === TEACHER) {
    const promise = lesson.getTeacherLessons();
    asyncTask(promise)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
    return (
      <TeacherPage
        userInfo={userInfo}
        data={data}
        setData={setData}
      />
    );
  }

  if (userInfo.role === STUDENT) {
    const promise = lesson.getStudentLessons();
    useEffect(() => {
      asyncTask(promise)
        .then((res) => { setData(res); console.log(res); })
        .catch((err) => console.log(err));
    }, [asyncTask]);
    return (
      <StudentPage
        userInfo={userInfo}
        data={data}
      />
    );
  }
  return null;
};
