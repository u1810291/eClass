/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Container } from './style';
import { useInfoForm } from './hooks';
import StudentRegister from '../../../../../components/StudentRegister';

export default ({ id }) => {
  const [date, setDate] = useState('');
  const { formik, single } = useInfoForm(id);
  const { cities, countries } = useSelector((state) => state.listsReducers);
  return (
    <Container>
      <StudentRegister
        date={date}
        setDate={setDate}
        formik={formik}
        cities={cities}
        countries={countries}
        single={single}
      />
    </Container>
  );
};
