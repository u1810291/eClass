import React from 'react';
import moment from 'moment';
import Calendar from '../CustomCalendar';
import { Container, BigCalendar } from './style';
import Card from '../Card';

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
      <BigCalendar>
        <Card>
          <Calendar
            events={events}
          />
        </Card>
      </BigCalendar>
    </Container>
  );
};
