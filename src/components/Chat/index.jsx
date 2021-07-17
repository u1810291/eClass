import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { Container } from './style';

export default ({ chats, selected, setSelected }) => (
  <Container>
    <Sidebar
      chats={chats}
      selected={selected}
      setSelected={setSelected}
    />
    <Content />
  </Container>
);
