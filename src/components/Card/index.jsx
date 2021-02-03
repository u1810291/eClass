import React from 'react';
import { Container } from './style';

export default ({ children, color, ...others }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container color={color} {...others}>
    {children}
  </Container>
);
