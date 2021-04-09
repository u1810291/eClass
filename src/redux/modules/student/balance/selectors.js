export function dataSelector(data) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = data;
  const filtered = content.map((el) => ({
    available_balance: el.available_balance,
    balance: el.balance,
    id: el.id,
    name: el.name,
    tariff_amount: el.amount,
    tariff_description: el.description,
    tariff_id: el.id,
    tariff_lang: el.lang,
    tariff_lessons_count: el.lessons_count,
    tariff_name: el.name,
    subject_id: el.tariff ? el.tariff.subject.id : '',
    subject_name: el.tariff ? el.tariff.subject.name : ''
  }));

  return { total: total_elements, data: filtered };
}
