/* eslint-disable camelcase */

export function dataSelector(subject) {
  const { content } = subject;
  const filtered = content.map((el) => ({
    id: el.id,
    lang: el.lang,
    value: el.name,
    subject_lang: el.subject_lang,
    description: el.description
  }));
  return { data: filtered };
}

export function addSubjectSelector(data) {
  const filtered = {
    name: data.en_name,
    subject_lang: data.subject_lang,
    description: data.en_description,
    subject_names:
      [
        {
          lang: 'ru',
          name: data.ru_name,
          description: data.ru_description
        },
        {
          lang: 'uz',
          name: data.uz_name,
          description: data.uz_description
        }]
  };
  return { data: filtered };
}
