import React from 'react';
import moment from 'moment';
import Calendar from '../CustomCalendar';
import { Container, BigCalendar, SmallCalendar } from './style';
import Card from '../Card';
import CustomCalendarV2 from '../CustomCalendarV2';

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
      <Card>
        <BigCalendar>
          <Calendar
            events={events}
          />
        </BigCalendar>
      </Card>
      <SmallCalendar>
        <Card>

          <CustomCalendarV2 />
        </Card>
        <Card />
      </SmallCalendar>
    </Container>
  );
};
