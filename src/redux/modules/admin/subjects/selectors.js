/* eslint-disable camelcase */

export function dataSelector(lesson) {
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    id: el.id,
    lang: el.lang,
    name: el.name,
    subject_lang: el.subject_lang,
    description: el.description
  }));
  return { total: total_elements, data: filtered };
}

export function addSubjectSelector(data) {
  const filtered = { data };
  return { data: filtered };
}
