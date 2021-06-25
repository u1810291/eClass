import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Payments from '../../../components/Payments';
import PaymentsHeader from '../../../components/Headers/PaymentsHeader';
import { Container } from '../style';
import { fetchData } from '../../../redux/modules/admin/groups/actions';

export default () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.adminGroupsReducers);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Container>
      <PaymentsHeader />
      <Payments data={data} />
    </Container>
  );
};
