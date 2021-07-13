import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Payments from '../../../components/Payments';
import PaymentsHeader from '../../../components/Headers/PaymentsHeader';
import { Container } from '../style';
import { fetchData } from '../../../redux/modules/student/groups/actions';
import { getMethods } from '../../../redux/modules/student/payments/actions';
import { fetchData as getTariffs } from '../../../redux/modules/admin/tariffs/actions';
import { payment } from './helper';

export default () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.studentGroupsReducers);
  const tariffs = useSelector((state) => state.adminTariffsReducers);
  const { userInfo } = useSelector((state) => state.userReducer);
  const { methods, error } = useSelector((state) => state.studentPaymentsReducers);
  const { formik } = payment(userInfo.id);
  useEffect(() => {
    dispatch(fetchData(userInfo.id));
    dispatch(getTariffs(''));
    dispatch(getMethods());
  }, [userInfo.id]);
  // eslint-disable-next-line no-console
  console.log(formik);
  return (
    <Container>
      <PaymentsHeader data={data} />
      <Payments
        tariffs={tariffs}
        methods={methods}
        error={error}
      />
    </Container>
  );
};
