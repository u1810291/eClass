import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { Container } from './style';

export default () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Sidebar active={active} setActive={setActive} />
      <Content />
    </Container>
  );
};
