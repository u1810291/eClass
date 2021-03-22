import React, { useState } from 'react';
import moment from 'moment';
import Calendar from '../Calendars/CustomCalendar';
import {
  Container, BigCalendar, SmallCalendar, Tag
} from './style';
import Card from '../Card';
import CustomCalendarV2 from '../Calendars/CustomCalendarV2';

import Icon from '../Icon';

export default () => {
  const [date, setDate] = useState(undefined);

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
          <CustomCalendarV2
            name="rangeDate"
            value={date}
            change={(value) => setDate(value)}
            dateFormat="YYYY-MM-DD"
            white
          />
        </Card>
        <Card>
          <Tag>
            <Tag.Header>
              <span>Information</span>
              <Icon icon="profile" />
            </Tag.Header>
            <Tag.Body>
              <Tag.Item>
                <Tag.Block color="#1FD0A3" />
                <Tag.Text>Attended</Tag.Text>
              </Tag.Item>
              <Tag.Item>
                <Tag.Block color="#F2A626" />
                <Tag.Text>Not Attended</Tag.Text>
              </Tag.Item>
            </Tag.Body>
          </Tag>
        </Card>
      </SmallCalendar>
    </Container>
  );
};
