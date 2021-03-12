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
    official_name: data.en_official_name,
    description: data.en_description,
    group_lang: data.lang,
    salary_percent: data.salary_percent,
    price: data.price,
    price_with_discount: data.price_with_discount,
    lesson_duration: data.lesson_duration,
    teacher_id: data.teacher_id,
    subject_id: data.subject_id,
    group_names: [{
      name: data.ru_name,
      description: data.ru_description
    }, {
      name: data.uz_name,
      description: data.uz_description
    }],
    study_days: data.study_days,
    start_date: data.start_date,
    finish_date: data.finish_date
  };
  return { data: filtered };
}
