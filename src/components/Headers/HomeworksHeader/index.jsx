/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Body,
  Container,
  Title,
  SwitchButton
} from '../style';

export default () => (
  <Container>
    <Body>
      <Title>Homeworks</Title>
      <SwitchButton>
        <SwitchButton.Button>
          <div>Not finished works</div>
          <SwitchButton.Counter>15</SwitchButton.Counter>
        </SwitchButton.Button>
        <SwitchButton.Button>
          <div>Finished works</div>
          <SwitchButton.Counter>15</SwitchButton.Counter>
        </SwitchButton.Button>
      </SwitchButton>
    </Body>
  </Container>
);
