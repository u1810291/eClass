/* eslint-disable camelcase */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import { setTitle } from '../../redux/modules/nav/actions';
import { fetchData } from '../../redux/modules/user/actions';
import appSelector from '../../redux/selectors/app';

export default () => {
  const dispatch = useDispatch();
  const { access_token } = useSelector(appSelector);

  useEffect(() => {
    if (access_token !== null) {
      dispatch(fetchData());
    }
    const path = window.location.pathname.split('/');
    const pathTitle = path ? path[1] : '';
    const title = pathTitle.length
      ? `${pathTitle.charAt(0).toUpperCase()}${pathTitle.slice(1, pathTitle.length)}`
      : '';

    dispatch(setTitle(title));
  }, [dispatch, fetchData]);

  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};
