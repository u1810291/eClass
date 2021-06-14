import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from '../style';
import StudentsList from '../../../../components/Groups/StudentsList';
import { fetchStudents } from '../helper';

export default () => {
  const { location: { state } } = useHistory();
  const { data } = fetchStudents(state);
  return (
    <Container>
      <StudentsList data={data} />
    </Container>
  );
};
