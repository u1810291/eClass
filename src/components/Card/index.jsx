import React from 'react';
import { Container } from './style';

export default ({ children, color, size }) => (
  <Container color={color} size={size}>
    {children}
  </Container>
);
