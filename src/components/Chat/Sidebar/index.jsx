/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Item from './Item';
import { Container, Header, Body } from './style';

export default () => {
  const [active, setActive] = useState(false);
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
            setActive={setActive}
          />
        ))}
      </Body>
    </Container>
  );
};
