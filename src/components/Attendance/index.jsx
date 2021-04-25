import React from 'react';
import moment from 'moment';
import Calendar from '../Calendars/CustomCalendar';
import {
  Container, BigCalendar, SmallCalendar, Tag
} from './style';
import Card from '../Card';
import CustomCalendarV2 from '../Calendars/CustomCalendarV2';
import Icon from '../Icon';
import Error from '../Error';
import Spinner from '../Spinner';

export default ({
  data, loading, error, date, setDate
}) => {
  const events = data.map((el) => ({
    start: moment(el.scheduled_start).toDate(),
    end: el.finished ? moment(el.finished_at).toDate()
      : moment(el.scheduled_start).add(1, 'hours').toDate(),
    // ...( }),
    title: el.group.name
  }));
  return (
    <Container>
      {error ? <Error message={error} />
        : (
          <>
            <Card>
              {loading
                ? <Spinner contain black />
                : (
                  <BigCalendar>
                    <Calendar
                      events={events}
                    />
                  </BigCalendar>
                )}
            </Card>
            <SmallCalendar data={data}>
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
          </>
        )}
    </Container>
  );
};
