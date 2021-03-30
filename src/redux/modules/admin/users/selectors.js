/* eslint-disable camelcase */
import moment from 'moment';

export function dataSelector(payload, user) {
  const { total_elements, content } = user;
  if (payload === 'student') {
    const student = content.map((el) => ({
      id: el.id,
      address: el.address.address,
      confirmed_by_admin: el.confirmed_by_admin,
      date_of_birth: moment(el.date_of_birth).format('DD-MM-YYYY'),
      email: el.email,
      username: el.username,
      full_name: `${el.first_name} ${el.last_name} ${el.middle_name}`,
      password: el.password,
      limited: el.limited,
      max_storage: el.max_storage,
      parents: el.parents.map((i) => [{
        description: i.description,
        full_name: i.full_name,
        phones: i.phones.map((j) => [{
          description: j.description,
          phone: j.phone
        }])
      }]),
      phones: el.phones.map((k) => ({
        id: k.id,
        description: k.description,
        phone: k.phone
      })),
      school_number: el.school_number,
      trial_lessons: el.trial_lessons
    }));
    return { total: total_elements, data: student };
  }
  if (payload === 'teacher') {
    const teacher = content.map((el, i) => ({
      address: `${el.address.country} ${el.address.city} ${el.address.address}`,
      average_rating: el.average_rating,
      date_of_birth: moment(el.date_of_birth).format('DD-MM-YYYY'),
      description: el.description,
      email: el.email,
      id: i + 1,
      lang: el.lang,
      full_name: `${el.first_name} ${el.last_name} ${el.middle_name}`,
      max_storage: el.max_storage,
      password: el.password,
      phones: el.phones.map((item) => ({
        description: item.description,
        id: item.id,
        phone: item.phone
      })),
      specialization: el.specialization,
      subjects: el.subjects.map((item) => ({
        id: item.id,
        name: item.name
      })),
      username: el.username
    }));
    return { total: total_elements, data: teacher };
  }
  if (payload === 'admin') {
    const admin = content.map((el, i) => ({
      address: `${el.address.country} ${el.address.city} ${el.address.address}`,
      average_rating: el.average_rating,
      date_of_birth: moment(el.date_of_birth).format('DD-MM-YYYY'),
      description: el.description,
      email: el.email,
      id: i + 1,
      lang: el.lang,
      full_name: `${el.first_name} ${el.last_name} ${el.middle_name}`,
      max_storage: el.max_storage,
      password: el.password,
      phones: el.phones.map((item) => ({
        description: item.description,
        id: item.id,
        phone: item.phone
      })),
      username: el.username
    }));
    return { total: total_elements, data: admin };
  }
  return null;
}

export function tariffSelector(data) {
  return { data };
}
