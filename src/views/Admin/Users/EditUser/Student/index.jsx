/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Container } from './style';
import { useInfoForm } from './hooks';
import { getSingleUser } from '../../../../../redux/modules/admin/users/actions';
import StudentRegister from '../../../../../components/StudentRegister';

export default ({ id }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const { formik } = useInfoForm(id);
  const { cities, countries } = useSelector((state) => state.listsReducers);
  useEffect(() => {
    dispatch(getSingleUser('student', `student=${id}`));
  }, []);
  return (
    <Container>
      <StudentRegister
        date={date}
        setDate={setDate}
        formik={formik}
        cities={cities}
        countries={countries}
      />
    </Container>
  );
};
