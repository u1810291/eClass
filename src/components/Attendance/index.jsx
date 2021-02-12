import React, { useState } from 'react';
import Calendar from '../CustomCalendar';
import { Container, BigCalendar } from './style';
import 'react-calendar/dist/Calendar.css';

export default () => {
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      Attendance page
      <BigCalendar>
        <Calendar
          value={value}
          onChange={onChange}
        />
      </BigCalendar>
    </Container>
  );
};
