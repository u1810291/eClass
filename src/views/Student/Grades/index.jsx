import React from 'react';
import Grades from '../../../components/Grades';
import GradesHeader from '../../../components/Headers/GradesHeader';
import { Container } from './style';

export default () => (
  <Container>
    <GradesHeader />
    <Grades />
  </Container>
);
