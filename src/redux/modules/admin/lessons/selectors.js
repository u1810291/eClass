/* eslint-disable camelcase */
import moment from 'moment';

export function dataSelector(lesson) {
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    rescheduled: el.rescheduled.toString(),
    scheduled_start: moment(el.scheduled_start).format('MM-DD-YYYY hh:mm:ss'),
    time_to_start: `${el.time_to_start.days * -1}-${el.time_to_start.months * -1}-${moment(new Date()).format('YYYY')} ${el.time_to_start.hours * -1}:${el.time_to_start.minutes * -1}`
  }));
  return { total: total_elements, data: filtered };
}
