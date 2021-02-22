// import moment from 'moment';

export function studentSelector(data) {
  const selected = {
    username: data.username,
    first_name: data.first_name,
    last_name: data.last_name,
    middle_name: data.middle_name,
    password: data.password,
    email: data.email,
    date_of_birth: '1999-02-01',
    lang: data.lang.toString(),
    phones: data.phone.map((el) => ({
      phone: el.toString(),
      description: 'asdda'
    })),
    description: data.phone_description,
    parents: [{
      full_name: data.parent_first_name,
      description: data.parent_description,
      phones: data.parent_phone.map((el) => ({
        phone: el.toString(),
        description: 'asd'
      }))
    }],
    school_number: data.school_number,
    city_id: data.city_id,
    city_name: data.city_name.toString(),
    address: data.address
  };
  return { data: JSON.stringify(selected) };
}
