/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Container
} from './style';
import Balance from '../../../components/Balance';
import { fetchData } from '../../../redux/modules/student/balance/actions';

export default () => {
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.studentBalanceReducers);
  useEffect(() => {
    dispatch(fetchData());
    setDate(moment(new Date()).format('DD-MM-YYYY hh:mm:ss'));
  }, [fetchData]);
  console.log(data, error, loading);
  return (
    <Container>
      <Balance date={date} />
    </Container>
  );
};
