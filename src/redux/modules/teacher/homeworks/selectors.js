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
    subject: el.subject.name
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
