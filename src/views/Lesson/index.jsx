import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container } from './style';
import { fetchData } from '../../redux/modules/lessons/actions';
import { getHeader } from './helper';
import LessonsHeader from '../../components/Headers/LessonsHeader';
import Spinner from '../../components/Spinner';
import { useMounted } from '../../hooks/mounted';
// import TableError from '../../components/Table/Error';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.lessonsReducers);
  const header = getHeader(userInfo);
  const isMounted = useMounted();
  useEffect(() => {
    setLoading(true);
    if (isMounted()) {
      dispatch(fetchData(userInfo.role));
      setLoading(false);
    }
  }, [fetchData, isMounted]);
  if (loading) return <Spinner contain black />;
  // const displayTable = {
  //   tale: error ? (
  //     <TableError />
  //   ) : (

  //     <Table perms={userInfo.rights} data={data} header={header} />
  //   )
  // };
  return (
    <Container>
      <LessonsHeader />
      {/* {displayTable} */}
      <Table perms={userInfo.rights} data={data} header={header} />

    </Container>
  );
};
