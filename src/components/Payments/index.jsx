import React from 'react';
import { Container } from './style';
import Circle from '../Circle';

export default ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Circle size="60" text="1" />
      Payments
    </Container>
  );
};
