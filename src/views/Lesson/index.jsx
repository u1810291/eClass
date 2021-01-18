import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';
import { useAsync } from '../../hooks/mounted';
import lesson from '../../services/lesson';

export const AdminPage = ({ userInfo, data, setData }) => (
  <Container>
    <Table perms={userInfo.rights} />
  </Container>
);

export const StudentPage = ({ userInfo, data, setData }) => {
  const asyncTask = useAsync();

  useEffect(() => {
    const promise = lesson.getAll();
    asyncTask(promise)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  });

  return (
    <Container>
      <Table perms={userInfo.rights} data={data} />
    </Container>
  );
};

export const TeacherPage = ({ userInfo, data, setData }) => (
  <Container>
    <Table perms={userInfo.rights} />
  </Container>
);
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
