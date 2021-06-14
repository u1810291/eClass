/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Container
} from './style';
import Balance from '../../../components/Balance';
import { fetchData } from '../../../redux/modules/teacher/balance/actions';

export default () => {
  const [date, setDate] = useState('');
  const options = [{ id: 1, value: 'Balance' }, { id: 2, value: 'Payments' }];
  const [option, setOption] = useState(1);
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.teacherBalanceReducers);
  useEffect(() => {
    dispatch(fetchData());
    setDate(moment(new Date()).format('MM-DD-YYYY hh:mm:ss'));
  }, [fetchData]);
  return (
    <Container>
      <Balance
        date={date}
        data={data}
        error={error}
        option={option}
        loading={loading}
        options={options}
        setOption={setOption}
      />
    </Container>
  );
};
