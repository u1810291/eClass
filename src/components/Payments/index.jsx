import React from 'react';
import { Container, Steps, HR } from './style';
import Circle from '../Circle';

export default ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Steps>
        <Circle size="60px" text="1" />
        <HR />
        <Circle size="60px" text="2" />
        <HR />
        <Circle size="60px" text="3" />
        <HR />
        <Circle size="60px" text="4" />
      </Steps>
      Payments
    </Container>
  );
};
