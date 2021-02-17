/* eslint-disable camelcase */
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import { fetchData } from '../../redux/modules/user/actions';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);

  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};
