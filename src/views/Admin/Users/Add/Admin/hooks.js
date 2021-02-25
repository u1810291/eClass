import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { regAdmin } from '../../../../../redux/modules/auth/actions';

export const useInfoForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string(),
    email: Yup.string().email().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: Yup.string().required('Language is required'),
    description: Yup.string(),
    phone: Yup.array().of(Yup.number().min(998330000000, 'Number should be 12 digits example 99 890 888 55 44').max(998999999999, 'Number should be 12 digits example 99 890 888 55 44')),
    phone_description: Yup.string(),
    country: Yup.string(),
    city_name: Yup.string(),
    address: Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      first_name: '',
      username: '',
      password: '',
      last_name: '',
      middle_name: '',
      email: '',
      date_of_birth: '',
      lang: '',
      description: '',
      phone: [],
      phone_description: '',
      country: '',
      city_name: '',
      address: ''
    },

    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(regAdmin(values, (res) => {
        // eslint-disable-next-line no-alert
        if (res) alert('Succesfully added');
        return res ? history.push('/users') : null;
      }));
    }
  });

  return { formik };
};
