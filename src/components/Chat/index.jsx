import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { Container } from './style';

export default ({ users }) => (
  <Container>
    <Sidebar />
    <Content />
  </Container>
);
