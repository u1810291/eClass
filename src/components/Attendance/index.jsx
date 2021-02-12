import React from 'react';
import moment from 'moment';
import Calendar from '../CustomCalendar';
import { Container, BigCalendar } from './style';

export default () => {
  const events = [
    {
      start: moment().toDate(),
      end: moment()
        .add(1, 'days')
        .toDate(),
      title: 'Some title'
    }
  ];
  return (
    <Container>
      Attendance page
      <BigCalendar>
        <Calendar
          events={events}
        />
      </BigCalendar>
    </Container>
  );
};
