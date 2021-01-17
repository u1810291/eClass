import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import { setTitle } from '../../redux/modules/nav/actions';
import { userInfo } from '../../redux/modules/user/actions';
import user from '../../services/user';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const path = window.location.pathname.split('/');
    const pathTitle = path ? path[1] : '';
    const title = pathTitle.length
      ? `${pathTitle.charAt(0).toUpperCase()}${pathTitle.slice(1, pathTitle.length)}`
      : '';
    user.whoAmI().then((res) => {
      console.log(res);
      dispatch(userInfo(res));
    }).catch((err) => console.log('err', err));
    dispatch(setTitle(title));
  });
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};
