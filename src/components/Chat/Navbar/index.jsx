import React from 'react';
import Icon from '../../Icon';
import { Container, UserInfo, ActionBar } from './style';

export default () => (
  <Container>
    <UserInfo>
      Avian Rizky online
    </UserInfo>
    <ActionBar>
      Navbar
      <Icon icon="video-materials" />
      <Icon icon="connection" />
      <Icon icon="video-materials" />
    </ActionBar>
  </Container>
);
