/* eslint-disable camelcase */
import React from 'react';
import { Container } from './style';

export default (props) => {
  const { start_url, join_url } = props;
  console.log(start_url, ' ', join_url);
  return (
    <Container>
      <h1>Zoom meeting</h1>
    </Container>
  );
};
