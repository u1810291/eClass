/* eslint-disable react/no-array-index-key */
import React from 'react';
import Item from './Item';
import { Container, Header, Body } from './style';

export default ({ active, setActive }) => {
  console.log(active);
  return (
    <Container>
      <Header>
        Header
      </Header>
      <Body>
        {[...Array(20)].map((el, i) => (
          <Item
            key={i}
            id={i}
            active={active}
            onClick={() => setActive(true)}
          />
        ))}
      </Body>
    </Container>
  );
};
