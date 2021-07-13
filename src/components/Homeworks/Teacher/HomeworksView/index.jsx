/* eslint-disable no-console */
import React from 'react';

import { Container } from './style';

const HomeworksView = ({ id, getHomeworks }) => {
  const { single } = getHomeworks(id);
  return (
    <Container>
      {console.log(id, single)}
    </Container>
  );
};
export default HomeworksView;
