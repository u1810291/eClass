import moment from 'moment';

export function dataSelector(lesson) {
  const { content } = lesson;
  const filtered = content.map((el) => ({
    rescheduled: el.rescheduled.toString(),
    scheduled_start: moment(el.scheduled_start).format('DD-MM-YYYY hh:mm:ss'),
    time_to_start: `${el.time_to_start.days * -1}-${el.time_to_start.months * -1}-${moment(new Date()).format('YYYY')} ${el.time_to_start.hours * -1}:${el.time_to_start.minutes * -1}`
  }));
  return { data: filtered };
}

const some = {
  address: 'Okkurgon 59, 28, 19',
  confirmed_by_admin: false,
  date_of_birth: '1983-07-23',
  email: 'qDCdIoWivb@email.com',
  first_name: 'First name',
  last_name: 'Last name',
  middle_name: 'Middle name',
  limited: true,
  max_storage: 104857600,
  parents: [{
    description: 'father',
    full_name: 'Last father name First father name',
    id: 'fb0034cc-b0e6-49e8-b374-d55f329c5b90',
    phones: [{
      description: "Father's phone",
      id: '7863b075-8af8-4b64-8d1b-71e04d5acf17',
      phone: '998789456123'
    }]
  },
  {
    description: 'mother',
    full_name: 'Last mother name First mother name',
    id: '82171be3-1f16-43c2-bb1d-533a86e63a6f',
    phones: [{
      description: "Mother's phone",
      id: '0b59b278-a9ff-44ed-9942-591cc8bb2564',
      phone: '998456432198'
    }]
  }],
  password: '',
  phones: [{
    description: 'My phone',
    id: '0e4cfa1a-58e3-4367-a111-e751970f6ebb',
    phone: '998495246428'
  }],
  school_number: '235',
  trial_lessons: 1,
  username: 'TKoMCcGeBq'
};
