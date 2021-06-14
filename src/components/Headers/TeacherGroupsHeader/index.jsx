import React from 'react';

import {
  Container, Body, TitleWrapper, Right
} from '../style';

export default () => (
  <Container>
    <Body>
      <TitleWrapper>
        <TitleWrapper.Title>Groups</TitleWrapper.Title>
        <TitleWrapper.Clear>Celar filter</TitleWrapper.Clear>
      </TitleWrapper>
      <Right />
    </Body>
  </Container>
);
