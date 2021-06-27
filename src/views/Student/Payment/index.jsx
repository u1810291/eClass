import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Payments from '../../../components/Payments';
import PaymentsHeader from '../../../components/Headers/PaymentsHeader';
import { Container } from '../style';
import { fetchData } from '../../../redux/modules/student/groups/actions';
import { fetchData as getTariffs } from '../../../redux/modules/admin/tariffs/actions';

export default () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.studentGroupsReducers);
  const tariffs = useSelector((state) => state.adminTariffsReducers);
  const { userInfo } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(fetchData(userInfo.id));
    dispatch(getTariffs(''));
  }, [userInfo.id]);
  return (
    <Container>
      <PaymentsHeader data={data} />
      <Payments tariffs={tariffs} />
    </Container>
  );
};
