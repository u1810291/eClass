import React from 'react';
import {
  Container, Body, Title, SwitchButton
} from '../style';

export default () => (
  <Container>
    <Body>
      <Title>Quizes</Title>
      <SwitchButton>
        <SwitchButton.Button> Not finished works</SwitchButton.Button>
        <SwitchButton.Button> Finished works</SwitchButton.Button>
      </SwitchButton>
    </Body>
  </Container>
);
