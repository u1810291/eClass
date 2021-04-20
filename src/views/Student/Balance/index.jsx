/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container
} from './style';
import Balance from '../../../components/Balance';
import Payments from '../../../components/Balance/Payments';
import { fetchData, fetchPayments } from '../../../redux/modules/student/balance/actions';

export default () => {
  const options = [{ id: 1, value: 'Balance' }, { id: 2, value: 'Payments' }];
  const [option, setOption] = useState(1);
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.studentBalanceReducers);
  useEffect(() => {
    if (option === 1) dispatch(fetchData());
    if (option === 2) dispatch(fetchPayments());
  }, [fetchData, option, setOption]);

  return (
    <Container>
      {option === 1
        ? (
          <Balance
            data={data}
            error={error}
            option={option}
            loading={loading}
            options={options}
            setOption={setOption}
          />
        )
        : ''}
      {option === 2
        ? (
          <Payments
            data={data}
            error={error}
            option={option}
            loading={loading}
            options={options}
            setOption={setOption}
          />
        ) : ''}
    </Container>
  );
};
