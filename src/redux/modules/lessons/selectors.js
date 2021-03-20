export function dataSelector(lesson) {
  // eslint-disable-next-line camelcase
  const { content } = lesson;
  console.log(content);
  const filtered = content.map((el) => ({
    description: el.description,
    files: el.files.map((item) => item.download_link),
    group: el.group.description,
    group_name: el.group.name,
    id: el.id,
    lesson: el.lesson.id,
    subject: el.subject.name
  }));
  return { data: filtered };
}
