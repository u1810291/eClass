import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { fetchData } from '../../redux/modules/lessons/actions';
import { getHeader } from './helper';
import LessonsHeader from '../../components/Headers/LessonsHeader';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  console.log(userInfo);
  const header = getHeader(userInfo.role);
  const { data } = useSelector((state) => state.lessonsReducers);
  useEffect(() => {
    dispatch(fetchData(userInfo));
  }, [fetchData]);

  return (
    <Container>
      <LessonsHeader />
      <Table perms={userInfo.rights} data={data} header={header} />
    </Container>
  );
};
