import moment from 'moment';

export function dataSelector(lesson) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    date: moment(el.scheduled_start).format('DD.MM.YYYY'),
    time: moment(el.scheduled_start).format('hh:mm:ss'),
    duration: el.duration,
    teacher: el.teacher.full_name,
    subject: el.subject.name,
    link: 'undefined'
  }));
  return { total: total_elements, data: filtered };
}
