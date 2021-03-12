/* eslint-disable camelcase */

export function dataSelector(subject) {
  const { content } = subject;
  const filtered = content.map((el) => ({
    id: el.id,
    lang: el.lang,
    name: el.name,
    subject_lang: el.subject_lang,
    description: el.description
  }));
  return { data: filtered };
}

export function addSubjectSelector(data) {
  const filtered = { data };
  return { data: filtered };
}
