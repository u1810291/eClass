import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

export const useInfoForm = () => {
  const history = useHistory();
  const phoneNubers = Yup.number().min(12, 'Minimum should be 12 digits');
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    middle_name: Yup.string(),
    email: Yup.string().required('Required'),
    date_of_birth: Yup.string().required('Required'),
    lang: Yup.string().required('Required'),
    description: Yup.string(),
    phone: Yup.array().of(phoneNubers).min(1, 'Some'),
    phone_description: Yup.string(),
    country: Yup.string(),
    city_id: Yup.string(),
    city_name: Yup.string(),
    address: Yup.string(),
    specialization: Yup.string(),
    subjects: Yup.string()
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
