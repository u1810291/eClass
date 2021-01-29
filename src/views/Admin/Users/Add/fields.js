import * as Yup from 'yup';

// eslint-disable-next-line func-names
Yup.addMethod(Yup.array, 'unique', function (message, mapper = (a) => a) {
  // eslint-disable-next-line react/no-this-in-sfc
  return this.test('unique', message, (list) => list.length === new Set(list.map(mapper)).size);
});
export default {
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  middle_name: Yup.string().required('Middle name is required'),
  email: Yup.string().email().required('Email is required'),
  date_of_birth: Yup.string().required('Date of birth is required'),
  lang: 'ru',
  phones:
    [
      {
        phone: Yup.array().required('Phone is required').of(Yup.number().positive().integer()).unique('Phone numbers must be unique'),
        description: Yup.string().required('Phone number is required')
      }
    ],
  description: Yup.string(),
  parents: [
    {
      full_name: Yup.string().required('Full name is required'),
      description: Yup.string(),
      phones: [
        {
          phone: Yup.string(),
          description: Yup.string()
        }
      ]
    }
  ],
  school_number: Yup.string().required('School is required'),
  city_name: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required')
};
