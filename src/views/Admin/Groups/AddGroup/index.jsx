import React from 'react';

import { Container } from '../style';
import AddGroup from '../../../../components/Groups/AddGroup';
import { usingFormik } from './helper';

export default () => {
  const formik = usingFormik();
  return (
    <Container>
      <AddGroup formik={formik} />
    </Container>
  );
};
