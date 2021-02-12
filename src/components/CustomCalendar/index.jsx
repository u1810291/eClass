import React from 'react';
import Calendar from 'react-calendar';
import { Container } from './style';

export default ({ onChange, value }) => (
  <Container>

    <Calendar
      onChange={onChange}
      value={value}
      calendarType="US"
    />
  </Container>
);
