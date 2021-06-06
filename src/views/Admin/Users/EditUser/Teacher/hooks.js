import { useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { regTeacher } from '../../../../../redux/modules/auth/actions';
import { getSingleUser } from '../../../../../redux/modules/admin/users/actions';

export const useInfoForm = (id) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { single } = useSelector((state) => state.adminUsersReducers);
  useEffect(() => {
    dispatch(getSingleUser('teacher', `teacher=${id}`));
  }, [id]);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string(),
    email: Yup.string().email().required('Email is required'),
    date_of_birth: Yup.string().required('Date of birth is required'),
    lang: Yup.string().required('Language is required'),
    phone: Yup.array().of(Yup.number().min(998330000000, 'Number should be 12 digits example 99 890 888 55 44').max(998999999999, 'Number should be 12 digits example 99 890 888 55 44')),
    phone_description: Yup.string(),
    country: Yup.string(),
    city_id: Yup.string(),
    city_name: Yup.string(),
    specialization: Yup.string(),
    subjects: Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      username: single.username,
      first_name: single.first_name,
      last_name: single.last_name,
      middle_name: single.middle_name,
      email: single.email,
      date_of_birth: single.date_of_birth,
      lang: single.lang,
      phone: single.phones,
      phone_description: '',
      country: '',
      city_id: '',
      city_name: single.address && single.address.city,
      specialization: single.specialization,
      subjects: single.subjects
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
