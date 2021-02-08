import React from 'react';
import {
  Container, Body, Title, SwitchButton
} from '../style';

export default () => (
  <Container>
    <Body>
      <Title>Homeworks</Title>
      <SwitchButton>
        <SwitchButton.Button> Submit</SwitchButton.Button>
        <SwitchButton.Button> Not Submit</SwitchButton.Button>
      </SwitchButton>
    </Body>
  </Container>
);
