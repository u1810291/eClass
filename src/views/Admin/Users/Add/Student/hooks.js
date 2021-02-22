import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { regStudent } from '../../../../../redux/modules/auth/actions';

export const useInfoForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string().required('Middle name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: Yup.string().required('Language required'),
    phone: Yup.array().required('Phone is required'),
    country: Yup.string().required('Country is required'),
    city_name: Yup.string().required('City is required'),
    school_number: Yup.string().required('School is required'),
    address: Yup.string().required('Address is required'),
    phone_description: Yup.string().required('Description to number is required'),
    comment_description: Yup.string().required('Comment is required'),
    parent_first_name: Yup.string().required('Full name is required'),
    parent_last_name: Yup.string().required('Full name is required'),
    parent_middle_name: Yup.string().required('Full name is required'),
    parent_description: Yup.string().required('Description is required'),
    parent_phone: Yup.array().required('Phone is required'),
    parent_phone_description: Yup.string().required('Description is required')
  });
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      middle_name: '',
      username: '',
      password: '',
      email: '',
      date_of_birth: undefined,
      lang: undefined,
      country: '',
      city_name: '',
      school_number: '',
      address: '',
      phone: [],
      phone_description: '',
      comment_description: '',
      parent_first_name: '',
      parent_last_name: '',
      parent_middle_name: '',
      parent_description: '',
      parent_phone: [],
      parent_phone_description: ''
    },

    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(true);
      dispatch(regStudent(values, (data) => {
        setSubmitting(false);
        console.log(data);
      }));
      history.push('/users');
    }
  });

  return { formik };
};
