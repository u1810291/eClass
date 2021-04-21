export function dataSelector(data) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = data;
  const filtered = content.map((el) => ({
    description: el.description,
    files: el.files.map((item) => item.download_link),
    group: el.group.description,
    group_name: el.group.name,
    id: el.id,
    lesson: el.lesson.id,
    subject: el.subject.name
  }));
  return { total: total_elements, data: filtered };
}

export function addQuizSelector(data) {
  // eslint-disable-next-line camelcase

  const formData = new FormData();
  formData.append('file', data.file[0], data.file[0].name);
  formData.append('desc', data.desc);
  formData.append('till_date', data.till_date.toISOString());
  formData.append('from_date', data.from_date.toISOString());
  return { data: formData };
}

export function getFilesSelector(data) {
  const { content } = data;
  return { data: content };
}
