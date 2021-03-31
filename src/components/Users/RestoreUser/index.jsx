import React from 'react';

import { Container } from './style';

export default ({ row, useRestore }) => {
  const info = { user: 'student', name: row.original.username };
  const { data } = useRestore(info);
  return (
    <Container>
      {data}
    </Container>
  );
};
