import moment from 'moment';

export function dataSelector(lesson) {
  const { content } = lesson;
  const filtered = content.map(() => ({
    date: moment(lesson.scheduled_start).format('DD.MM.YYY'),
    time: moment(lesson.scheduled_start).format('hh:mm:ss'),
    duration: lesson.duration,
    teacher: lesson.teacher.full_name,
    subject: lesson.subject.name,
    link: 'undefined'
  }));
  return { data: filtered };
}
