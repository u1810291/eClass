import React from 'react';
import { DynamicImage } from '../../DynamicImage';
import Icon from '../../Icon';
import {
  Container, UserInfo, ActionBar, UserDetails
} from './style';

export default () => (
  <Container>
    <UserInfo>
      <DynamicImage name="Avian Rizky" />
      <UserDetails>

        Avian Rizky online
      </UserDetails>
    </UserInfo>
    <ActionBar>
      Navbar
      <Icon icon="video-materials" />
      <Icon icon="connection" />
      <Icon icon="video-materials" />
    </ActionBar>
  </Container>
);
