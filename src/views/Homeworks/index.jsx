import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { fetchData } from '../../redux/modules/homeworks/actions';
import { getHeader } from './helper';
import HomeworksHeader from '../../components/Headers/HomeworksHeader';
import TableError from '../../components/Table/Error';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const {
    loading, data, total, error
  } = useSelector((state) => state.homeworksReducers);
  const header = getHeader(userInfo);
  useEffect(() => {
    dispatch(fetchData({ user: userInfo.role }));
  }, [fetchData]);

  return (
    <Container>
      <HomeworksHeader />
      {error ? (
        <TableError message={error} />
      ) : (
        <Table
          total={total}
          perms={userInfo.rights}
          data={data}
          header={header}
          loading={loading}
          subData={data}
        />
      )}
    </Container>
  );
};
