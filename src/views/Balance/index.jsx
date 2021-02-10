/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Container
} from './style';
import Balance from '../../components/Balance';

export default () => {
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(moment(new Date()).format('DD-MM-YYYY hh:mm:ss'));
  }, [date, setDate]);
  return (
    <Container>
      <Balance date={date} />
    </Container>
  );
};
