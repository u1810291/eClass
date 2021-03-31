import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { regTeacher } from '../../../../../redux/modules/auth/actions';

export const useInfoForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string(),
    email: Yup.string().email().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: Yup.string().required('Language is required'),
    description: Yup.string(),
    phone: Yup.array().of(Yup.number().min(998330000000, 'Number should be 12 digits example 99 890 888 55 44').max(998999999999, 'Number should be 12 digits example 99 890 888 55 44')),
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
      dispatch(regTeacher(values, (res) => {
        setSubmitting(false);
        // eslint-disable-next-line no-alert
        if (res) alert('Succesfully added');
        return res ? history.push('/users') : null;
      }));
    }
  });

  return { formik };
};
