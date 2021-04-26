import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch } from 'react-redux';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import {
  Container, BigCalendar, SmallCalendar, Tag

} from './style';
import Card from '../Card';
import CustomCalendarV2 from '../Calendars/CustomCalendarV2';
import Icon from '../Icon';
import Error from '../Error';
import Spinner from '../Spinner';
import { useShowModal } from '../../hooks/modal';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
const Attendance = ({
  data, loading, error, date, setDate
}) => {
  const { showBlured } = useShowModal();
  const dispatch = useDispatch();

  const onEventDrop = ({ event, start, end }) => {
    const idx = data.indexOf(event);

    const updatedEvent = { ...event, start, end };
    const nextEvents = [...data];
    nextEvents.splice(idx, 1, updatedEvent);
    dispatch(updateEvents(nextEvents));
  };

  const eventStyleGetter = (event, start, end) => {
    const now = moment(new Date()).format('YYYY-MM-DD');
    const $end = moment(end).format('YYYY-MM-DD');
    const style = {
      backgroundColor: now === $end ? '#F64E60' : '#fff',
      color: now === $end ? '#fff' : '#181C32',
      borderColor: now === $end ? '#F64E60' : '#ebebf3'
    };
    return {
      style
    };
  };
  const handleOpenModal = () => showBlured({
    title: 'Dialog example',
    body: Update,
    overflow: 'visible'
  });

  const events = data.map((el) => ({
    start: moment(el.scheduled_start).toDate(),
    end: el.finished ? moment(el.finished_at).toDate()
      : moment(el.scheduled_start).add(1, 'hours').toDate(),
    title: el.group.name
  }));

  const formats = {
    dateFormat: 'D',
    dayFormat: 'ddd'
  };

  const onEventResize = ({ event, start, end }) => {
    const sDateTemp = moment(moment(start).format('YYYY-MM-DD HH:mm'));
    const time1 = moment(moment(event.start).format('HH:mm'), 'HH:mm');
    const eDateTemp = moment(moment(end).format('YYYY-MM-DD HH:mm'));
    const time2 = moment(moment(event.end).format('HH:mm'), 'HH:mm');
    let newStartDate = start;
    let newEndDate = end;
    if (eDateTemp.day() !== sDateTemp.day()) {
      newStartDate = new Date(
        sDateTemp.set({
          hour: time1.get('hour'),
          minute: time1.get('minute')
        })
      );

      newEndDate = new Date(
        eDateTemp.set({
          hour: time2.get('hour'),
          minute: time2.get('minute'),
          day: eDateTemp.day() - 1
        })
      );
    }

    const nextEvents = data.map((existingEvent) => (existingEvent.id === event.id
      ? { ...existingEvent, start: newStartDate, end: newEndDate }
      : existingEvent));

    dispatch(updateEvents(nextEvents));
  };

  const onSelect = (event) => {
    handleOpenModal();
    dispatch(getSingleEvent(event));
  };
  return (
    <Container>
      {error ? <Error message={error} />
        : (
          <>
            <Card>
              {loading
                ? <Spinner black />
                : (
                  <BigCalendar>
                    <DragAndDropCalendar
                      popup
                      resizable
                      selectable
                      formats={formats}
                      allDayAccessor="all-day"
                      events={eventData}
                      localizer={localizer}
                      defaultDate={new Date()}
                      onEventDrop={onEventDrop}
                      defaultView={Views.MONTH}
                      onEventResize={onEventResize}
                      views={['month', 'day', 'week']}
                      onSelectEvent={(event) => onSelect(event)}
                      showMultiDayTimes
                      components={{
                        toolbar: CustomToolbar,
                        month: {
                          event: CustomEventMonth
                        },
                        week: {
                          event: CustomEventWeekDay
                        },
                        day: {
                          event: CustomEventWeekDay
                        }
                      }}
                      eventPropGetter={eventStyleGetter}
                      events={events}
                    />
                  </BigCalendar>
                )}
            </Card>
            <SmallCalendar data={data}>
              <Card>
                {loading && setDate && !date
                  ? (
                    <>
                    </>
                  )
                  : (
                    <CustomCalendarV2
                      name="rangeDate"
                      value={date}
                      change={(value) => setDate(value)}
                      dateFormat="YYYY-MM-DD"
                      white
                    />
                  )}
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

export default Attendance;
