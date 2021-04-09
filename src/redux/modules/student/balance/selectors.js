import moment from 'moment';

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
    subject_name: el.tariff ? el.tariff.subject.name : '',
    date: moment(new Date()).format('DD-MM-YYYY hh:mm:ss')
  }));
  return { total: total_elements, data: filtered };
}

export function paymentSelector(data) {
  // eslint-disable-next-line camelcase
  const { total_elements, content } = data;
  const filtered = content.map((el) => ({
    amount: el.amount,
    code: el.code,
    date: moment(el.date).format('DD-MM-YYYY hh:mm:ss'),
    description: el.description,
    id: el.id,
    reference_id: el.reference_id,
    to: {
      full_name: el.to ? el.to.full_name : '',
      id: el.to ? el.to.id : '',
      username: el.to ? el.to.username : ''
    },
    from: {
      full_name: el.from ? el.from.full_name : '',
      id: el.from ? el.from.id : '',
      username: el.from ? el.from.username : ''
    }
  }));

  return { total: total_elements, data: filtered };
}
