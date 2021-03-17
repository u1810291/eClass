/* eslint-disable camelcase */
import React from 'react';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import Notification from '../../components/Notification';

export default () => (
  <Container>
    <Sidebar />
    <Content />
    <Notification />
  </Container>
);
