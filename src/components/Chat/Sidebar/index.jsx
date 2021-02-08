/* eslint-disable react/no-array-index-key */
import React from 'react';
import Item from './Item';
import { Container, Header, Body } from './style';

export default () => (
  <Container>
    <Header>
      Header
    </Header>
    <Body>
      {[...Array(20)].map((el, i) => (
        <Item key={i} id={i} />))}
    </Body>
  </Container>
);
