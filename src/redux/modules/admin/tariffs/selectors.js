/* eslint-disable camelcase */
export function dataSelector(lesson) {
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    id: el.id,
    name: el.name,
    lang: el.lang,
    amount: el.amount,
    description: el.description,
    lessons_count: el.lessons_count,
    tariff_names: el.tariff_names.map((item) => ({
      description: item.description,
      id: item.id,
      lang: item.lang,
      name: item.name
    }))
  }));
  return { total: total_elements, data: filtered };
}
