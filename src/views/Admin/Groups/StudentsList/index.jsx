import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../style';

import StudentsList from '../../../../components/Groups/StudentsList';
import { getGroupStudents } from './helper';

export default () => {
  const { location: state } = useHistory();
  const {
    data, loading, error, total
  } = getGroupStudents(state);
  // eslint-disable-next-line no-console
  console.log(data, loading, error, total);
  return (
    <Container>
      <StudentsList />
    </Container>
  );
};
