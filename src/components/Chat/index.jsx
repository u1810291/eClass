import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { Container } from './style';

export default () => (
  <Container>
    <Sidebar />
    <Content />
  </Container>
);
