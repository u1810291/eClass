import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { fetchData } from '../../redux/modules/lessons/actions';
import { getHeader } from './helper';
import LessonsHeader from '../../components/Headers/LessonsHeader';
import Spinner from '../../components/Spinner';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.lessonsReducers);
  const header = getHeader(userInfo);
  useEffect(() => {
    setLoading(true);
    if (userInfo !== undefined) {
      dispatch(fetchData(userInfo.role));
      setLoading(false);
    }
  }, [fetchData]);
  if (loading) return <Spinner contain black />;

  return (
    <Container>
      <LessonsHeader />
      <Table perms={userInfo.rights} data={data} header={header} />
    </Container>
  );
};
