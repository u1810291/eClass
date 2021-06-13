/* eslint-disable no-nested-ternary */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../style';

import StudentsList from '../../../../components/Groups/StudentsList';
import { getGroupStudents } from './helper';
import Spinner from '../../../../components/Spinner';
import Error from '../../../../components/Error';

export default () => {
  const { location: { state } } = useHistory();
  const {
    single, students, loading, error, total
  } = getGroupStudents(state);
  return (
    <Container>
      {loading ? <Spinner contain black />
        : error ? <Error message={error} />
          : <StudentsList data={students} total={total} group={single} />}
    </Container>
  );
};
