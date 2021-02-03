import * as Yup from 'yup';

Yup.addMethod(Yup.array, 'unique', function (message, mapper = (a) => a) {
  return this.test('unique', message, (list) => list.length === new Set(list.map(mapper)).size);
});

function getFields() {
  const studentFieldValidationSchema = () => Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string().required('Middle name is required'),
    email: Yup.string().email().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: 'ru',
    phone: Yup.array().required('Phone is required').of(Yup.number().positive().integer()).unique('Phone numbers must be unique'),
    phone_description: Yup.string().required('Description to number is required'),
    comment_description: Yup.string().notRequired(),
    parent_full_name: Yup.string().required('Full name is required'),
    parent_description: Yup.string().notRequired(),
    parent_phone: Yup.array().required('Phone is required').of(Yup.number().positive().integer()).unique('Phone numbers must be unique'),
    parent_phone_description: Yup.string().notRequired(),
    school_number: Yup.string().required('School is required'),
    city_name: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    specialization: Yup.string().required('Specialization is required')
  });

  const teacherFieldValidationSchema = () => Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string().required('Middle name is required'),
    email: Yup.string().email().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: 'ru',
    phone: Yup.array().required('Phone is required').of(Yup.number().positive().integer()).unique('Phone numbers must be unique'),
    phone_description: Yup.string().required('Description to number is required'),
    comment_description: Yup.string().notRequired(),
    city_name: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    specialization: Yup.string().required('Specialization is required')
  });

  const adminFieldValidationSchema = () => Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string().required('Middle name is required'),
    email: Yup.string().email().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: 'ru',
    phone: Yup.array().required('Phone is required').of(Yup.number().positive().integer()).unique('Phone numbers must be unique'),
    phone_description: Yup.string().required('Description to number is required'),
    comment_description: Yup.string().notRequired(),
    city_name: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    specialization: Yup.string().required('Specialization is required')
  });

  const studentInitialFieldValues = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    date_of_birth: '',
    lang: 'ru',
    phone: [],
    phone_description: '',
    comment_description: '',
    parent_full_name: '',
    parent_description: '',
    parent_phone: [],
    parent_phone_description: '',
    school_number: '',
    city_name: '',
    address: ''
  };
  const teacherInitialFieldValues = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    date_of_birth: '',
    lang: 'ru',
    phone: [],
    phone_description: '',
    comment_description: '',
    city_name: '',
    address: '',
    specialization: ''
  };
  const adminInitialFieldValues = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    email: '',
    date_of_birth: '',
    lang: 'ru',
    phone: [],
    phone_description: '',
    comment_description: '',
    city_name: '',
    address: '',
    specialization: ''
  };

  const getPath = window.location.pathname.split('/');
  switch (getPath[getPath.length - 1]) {
  case 'teacher':
    return { teacherFieldValidationSchema, teacherInitialFieldValues };
  case 'student':
    return { studentFieldValidationSchema, studentInitialFieldValues };

  case 'admin':
    return { adminFieldValidationSchema, adminInitialFieldValues };

  default:
    return null;
  }
}
export default getFields;
