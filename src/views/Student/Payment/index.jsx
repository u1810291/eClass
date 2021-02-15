import React from 'react';
import Payments from '../../../components/Payments';
import PaymentsHeader from '../../../components/Headers/PaymentsHeader';
import { Container } from '../style';

export default () => (
  <Container>
    <PaymentsHeader />
    <Payments />
  </Container>
);
