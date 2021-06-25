/* eslint-disable no-nested-ternary */
import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from '../style';
import StudentsList from '../../../../components/Groups/StudentsList';
import { fetchStudents } from '../helper';
import Spinner from '../../../../components/Spinner';
import Error from '../../../../components/Error';

export default () => {
  const { location: { state } } = useHistory();
  const {
    data, error, loading, total
  } = fetchStudents(state);
  return (
    <Container>
      {loading ? <Spinner contain black />
        : error ? <Error message={error} />
          : (
            <StudentsList
              data={data}
              total={total}
            />
          )}
    </Container>
  );
};
