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
  const filtered = data.content.map((el) => ({
    amount: el.amount,
    description: el.description,
    id: el.id,
    lang: el.lang,
    lessons_count: el.lessons_count,
    value: el.name,
    tariff_names: el.tariff_names
  }));
  return { data: filtered };
}

export function singleUser(payload, data) {
  if (payload === 'student') {
    const student = {
      id: data.id,
      address: data.address.address,
      confirmed_by_admin: data.confirmed_by_admin,
      date_of_birth: moment(data.date_of_birth).format('DD-MM-YYYY'),
      email: data.email,
      username: data.username,
      full_name: `${data.first_name} ${data.last_name} ${data.middle_name}`,
      password: data.password,
      limited: data.limited,
      max_storage: data.max_storage,
      parents: data.parents.map((i) => [{
        description: i.description,
        full_name: i.full_name,
        phones: i.phones.map((j) => [{
          description: j.description,
          phone: j.phone
        }])
      }]),
      phones: data.phones.map((k) => ({
        id: k.id,
        description: k.description,
        phone: k.phone
      })),
      school_number: data.school_number,
      trial_lessons: data.trial_lessons
    };
    return { data: student };
  }
  if (payload === 'teacher') {
    const teacher = {
      address: `${data.address.country} ${data.address.city} ${data.address.address}`,
      average_rating: data.average_rating,
      date_of_birth: moment(data.date_of_birth).format('DD-MM-YYYY'),
      description: data.description,
      email: data.email,
      id: i + 1,
      lang: data.lang,
      full_name: `${data.first_name} ${data.last_name} ${data.middle_name}`,
      max_storage: data.max_storage,
      password: data.password,
      phones: data.phones.map((item) => ({
        description: item.description,
        id: item.id,
        phone: item.phone
      })),
      specialization: data.specialization,
      subjects: data.subjects.map((item) => ({
        id: item.id,
        name: item.name
      })),
      username: data.username
    };
    return { data: teacher };
  }
  if (payload === 'admin') {
    const admin = {
      address: `${data.address.country} ${data.address.city} ${data.address.address}`,
      average_rating: data.average_rating,
      date_of_birth: moment(data.date_of_birth).format('DD-MM-YYYY'),
      description: data.description,
      email: data.email,
      id: i + 1,
      lang: data.lang,
      full_name: `${data.first_name} ${data.last_name} ${data.middle_name}`,
      max_storage: data.max_storage,
      password: data.password,
      phones: data.phones.map((item) => ({
        description: item.description,
        id: item.id,
        phone: item.phone
      })),
      username: data.username
    };
    return { total: total_elements, data: admin };
  }
  return null;
}
