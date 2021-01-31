import moment from 'moment';

export function dataSelector(user) {
  const { content } = user;
  const filtered = content.map((el) => ({
    address: el.address.address,
    confirmed_by_admin: el.confirmed_by_admin,
    date_of_birth: moment(el.date_of_birth).format('DD-MM-YYYY'),
    email: el.email,
    username: el.username,
    first_name: el.first_name,
    last_name: el.last_name,
    middle_name: el.middle_name,
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
    phones: el.phones.map((k) => [{
      description: k.description,
      phone: k.phone
    }]),
    school_number: el.school_number,
    trial_lessons: el.trial_lessons
  }));
  return { data: filtered };
}
