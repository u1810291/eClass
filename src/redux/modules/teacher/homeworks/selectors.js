import moment from 'moment';

export function dataSelector(lesson) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    description: el.description,
    files: el.files.map((item) => item),
    group: {
      name: el.group.name,
      role: el.group.description,
      image: null
    },
    group_id: el.group.id,
    group_name: el.group.name,
    group_description: el.group.description,
    id: el.id,
    lesson: el.lesson.id,
    start_date: moment(el.start_data).format('DD-MM-YYYY'),
    till_date: moment(el.till_date).format('DD-MM-YYYY'),
    subject: el.subject.name,
    subject_id: el.subject.id
  }));
  return { total: total_elements, data: filtered };
}

export function addHomeworkSelector(data) {
  // eslint-disable-next-line camelcase

  const formData = new FormData();
  formData.append('file', data.file[0], data.file[0].name);
  formData.append('desc', data.desc);
  formData.append('till', data.till_date.toISOString());
  formData.append('from', data.from_date.toISOString());
  return { data: formData };
}

export function getFilesSelector(data) {
  const { content } = data;
  return { data: content };
}
