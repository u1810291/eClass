/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Container } from './style';
import { useInfoForm } from './hooks';

import TeacherRegister from '../../../../../components/TeacherRegister';

export default () => {
  const [date, setDate] = useState('');
  const { formik } = useInfoForm();
  const { cities, countries } = useSelector((state) => state.listsReducers);
  return (
    <Container>
      <TeacherRegister
        date={date}
        setDate={setDate}
        formik={formik}
        cities={cities}
        countries={countries}
      />
    </Container>
  );
};
