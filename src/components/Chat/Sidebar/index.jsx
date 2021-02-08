/* eslint-disable react/no-array-index-key */
import React from 'react';
import Item from './Item';
import { Container, Header, Body } from './style';

export default ({ active, setActive }) => {
  // console.log(active);
  setActive(false);
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
            // onClick={() => console.log('Clicked')}
          />
        ))}
      </Body>
    </Container>
  );
};
