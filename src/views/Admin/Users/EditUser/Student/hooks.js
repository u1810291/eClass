import { useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { regStudent } from '../../../../../redux/modules/auth/actions';
import { getSingleUser } from '../../../../../redux/modules/admin/users/actions';

export const useInfoForm = (id) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { single } = useSelector((state) => state.adminUsersReducers);
  useEffect(() => {
    dispatch(getSingleUser('student', `student=${id}`));
  }, []);
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string().required('Middle name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string().email().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: Yup.string().required('Language required'),
    phone: Yup.array().of(Yup.number().min(998330000000, 'Number should be 12 digits example 99 890 888 55 44').max(998999999999, 'Number should be 12 digits example 99 890 888 55 44')),
    country: Yup.string(),
    city_name: Yup.string(),
    school_number: Yup.string(),
    address: Yup.string(),
    phone_description: Yup.string(),
    comment_description: Yup.string(),
    parent_first_name: Yup.string().required('First name is required'),
    parent_last_name: Yup.string().required('Last name is required'),
    parent_middle_name: Yup.string(),
    parent_description: Yup.string(),
    parent_phone: Yup.array().of(Yup.number().min(998330000000, 'Number should be 12 digits example 99 890 888 55 44').max(998999999999, 'Number should be 12 digits example 99 890 888 55 44')),
    parent_phone_description: Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      middle_name: '',
      username: '',
      password: '',
      email: '',
      date_of_birth: '',
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
      setSubmitting(true);
      dispatch(regStudent(values, (res) => {
        setSubmitting(false);
        // eslint-disable-next-line no-alert
        if (res) alert('Succesfully added');
        return res ? history.push('/users') : null;
      }));
    }
  });
  return { formik, single };
};
