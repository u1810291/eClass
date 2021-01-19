import moment from 'moment';

export function dataSelector(lesson) {
  const { content } = lesson;
  const filtered = content.map((el) => ({
    date: moment(el.scheduled_start).format('DD.MM.YYY'),
    time: moment(el.scheduled_start).format('hh:mm:ss'),
    duration: el.duration,
    teacher: el.teacher.full_name,
    subject: el.subject.name,
    link: 'undefined'
  }));
  return { data: filtered };
}
