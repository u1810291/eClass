/* eslint-disable no-console */
import React from 'react';

import { Container } from './style';

const AddRating = ({ data, addRating }) => {
  const { formik } = addRating();
  console.log(formik);
  return (
    <Container>
      Add rating
      {console.log(data)}
    </Container>
  );
};

export default AddRating;
