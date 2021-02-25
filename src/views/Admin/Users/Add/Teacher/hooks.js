import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

export const useInfoForm = () => {
  const history = useHistory();
  const phoneNubers = Yup.number().required('Phone is required').min(12, 'Minimum should be 12 digits');
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    middle_name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    date_of_birth: Yup.string().required('Required'),
    lang: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    phone: Yup.array().of(phoneNubers).min(1, 'Some'),
    phone_description: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city_id: Yup.string().required('Required'),
    city_name: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    specialization: Yup.string().required('Required'),
    subjects: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      email: '',
      date_of_birth: undefined,
      lang: undefined,
      description: '',
      phone: [],
      phone_description: '',
      country: '',
      city_id: '',
      city_name: '',
      address: '',
      specialization: '',
      subjects: ''
    },

    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      history.push('/users');
    }
  });

  return { formik };
};
