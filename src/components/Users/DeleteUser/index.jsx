import React from 'react';

import { Container } from './style';

export default ({ id, useDelete }) => {
  const data = { user: 'student', id };
  const { token } = useDelete(data);
  console.log(token);
  return (
    <Container>
      {token}
    </Container>
  );
};
