import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { fetchData } from '../../redux/modules/homeworks/actions';
import { getHeader } from './helper';
import HomeworksHeader from '../../components/Headers/HomeworksHeader';
import Spinner from '../../components/Spinner';
import TableError from '../../components/Table/Error';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const {
    loading, data, total, error
  } = useSelector((state) => state.homeworksReducers);
  const header = getHeader(userInfo);
  const lessonId = 'f5f9c496-e6c0-44ea-87e5-c0d75c6bb1e5';
  useEffect(() => {
    if (userInfo !== undefined) {
      dispatch(fetchData({ user: userInfo.role, id: lessonId }));
    }
  }, [fetchData]);
  if (loading) return <Spinner contain black />;

  const displayTable = error ? (
    <TableError message={error} />
  ) : (
    <Table
      total={total}
      perms={userInfo.rights}
      data={data}
      header={header}
      loading={loading}
    />
  );
  return (
    <Container>
      <HomeworksHeader />
      {displayTable}
    </Container>
  );
};
