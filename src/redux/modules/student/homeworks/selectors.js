import moment from 'moment';

export function dataSelector(lesson) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    description: el.description,
    files: el.files.map((item) => item.id),
    group: el.group.description,
    group_name: el.group.name,
    id: el.id,
    lesson: el.lesson.id,
    subject: el.subject.name,
    start_date: moment(el.start_date).format('DD/MM/YYYY HH:mm'),
    till_date: moment(el.till_date).format('DD/MM/YYYY HH:mm')
  }));
  return { total: total_elements, data: filtered };
}
