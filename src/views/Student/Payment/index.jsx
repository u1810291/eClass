import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Payments from '../../../components/Payments';
import PaymentsHeader from '../../../components/Headers/PaymentsHeader';
import { Container } from '../style';
import { fetchData } from '../../../redux/modules/student/groups/actions';

export default () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.studentGroupsReducers);
  const { userInfo } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(fetchData(userInfo.id));
  }, [userInfo.id]);
  return (
    <Container>
      <PaymentsHeader />
      <Payments data={data} />
    </Container>
  );
};
