import React from 'react';
import Attendance from '../../../components/Attendance';
import AttendanceHeader from '../../../components/Headers/AttendanceHeader';
import { Container } from './style';

export default () => (
  <Container>
    <AttendanceHeader />
    <Attendance />
  </Container>
);
