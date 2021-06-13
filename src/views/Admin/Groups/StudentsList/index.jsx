import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../style';

import StudentsList from '../../../../components/Groups/StudentsList';
import { getGroupStudents } from './helper';
import Spinner from '../../../../components/Spinner';

export default () => {
  const { location: { state } } = useHistory();
  const {
    students, loading, error, total
  } = getGroupStudents(state);
  // eslint-disable-next-line no-console
  console.log(students, loading, error, total);
  return (
    <Container>
      {loading ? <Spinner contain black />
        : <StudentsList data={students} />}
    </Container>
  );
};
