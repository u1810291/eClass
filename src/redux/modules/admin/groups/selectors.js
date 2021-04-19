/* eslint-disable camelcase */
import moment from 'moment';

export function dataSelector(lesson) {
  const { total_elements, content } = lesson;
  const filtered = content.map((el) => ({
    description: el.description,
    finish_date: moment(el.finish_date).format('YYYY-MM-DD hh:mm'),
    group_lang: el.group_lang,
    id: el.id,
    lang: el.lang,
    lesson_duration: el.lesson_duration,
    name: el.name,
    official_name: el.official_name,
    price: el.price,
    price_with_discount: el.price_with_discount,
    room_number: el.room_number,
    salary_percent: el.salary_percent,
    start_date: el.start_date,
    students: el.students.map((item) => ({
      full_name: item.full_name,
      id: item.id,
      username: item.username,
      image: item.image || null
    })),
    study_days: el.study_days.map((item) => ({
      day_of_week: item.day_of_week,
      id: item.id,
      start_time: item.start_date
    })),
    subject: {
      id: el.subject.id,
      name: el.subject.name
    },
    teacher: {
      full_name: el.teacher.full_name,
      id: el.teacher.id,
      username: el.teacher.username
    }
  }));
  return { total: total_elements, data: filtered };
}

export function addGroupSelector(data) {
  const filtered = {
    name: data.en_name,
    official_name: data.official_en_name,
    description: data.en_description,
    group_lang: data.lang,
    salary_percent: parseInt(data.salary_percent, 10),
    price: parseInt(data.price, 10),
    price_with_discount: parseInt(data.price_with_discount, 10),
    lesson_duration: parseInt(data.lesson_duration, 10),
    teacher_id: data.teacher_id,
    subject_id: data.subject_id,
    group_names: [{
      lang: 'ru',
      name: data.ru_name,
      description: data.ru_description
    }, {
      lang: 'uz',
      name: data.uz_name,
      description: data.uz_description
    }],
    study_days: data.study_days,
    start_date: data.start_date.toISOString(),
    finish_date: data.finish_date.toISOString()
  };
  return { data: filtered };
}
export function editGroupSelector(payload) {
  const { values, single } = payload;
  const filtered = {
    id: single.id,
    ...(values.en_name && { name: values.en_name }),
    ...(values.official_en_name && { official_name: values.official_en_name }),
    ...(values.en_description && { description: values.en_description }),
    ...(values.lang && { group_lang: values.lang }),
    ...(values.salary_percent && { salary_percent: parseInt(values.salary_percent, 10) }),
    ...(values.price && { price: parseInt(values.price, 10) }),
    ...(values.price_with_discount
      && { price_with_discount: parseInt(values.price_with_discount, 10) }),
    ...(values.lesson_duration && { lesson_duration: parseInt(values.lesson_duration, 10) }),
    ...(values.teacher_id && { teacher_id: values.teacher_id }),
    ...(values.subject_id && { subject_id: values.subject_id }),
    ...((values.ru_name || values.uz_name) && {
      group_names: [{
        ...(values.ru_name && { id: single.group_names[0].id }),
        ...(values.ru_name && { lang: 'ru' }),
        ...(values.ru_name && { name: values.ru_name }),
        ...(values.ru_description && { description: values.ru_description })
      }, {
        ...(values.uz_name && { id: single.group_names[1].id }),
        ...(values.uz_name && { lang: 'uz' }),
        ...(values.uz_name && { name: values.uz_name }),
        ...(values.uz_description && { description: values.uz_description })
      }]
    }),
    ...(values.study_days && { study_days: values.study_days }),
    ...(values.start_date && { start_date: values.start_date.toISOString() }),
    ...(values.finish_date && { finish_date: values.finish_date.toISOString() })
  };
  return { data: filtered };
}
