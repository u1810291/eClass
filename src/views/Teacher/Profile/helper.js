/* eslint-disable no-alert */
import { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, fetchData } from '../../../redux/modules/teacher/profile/actions';

export const useEditForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const { data, loading, error } = useSelector((state) => state.teacherProfileReducers);

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Required'),
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    middle_name: Yup.string(),
    email: Yup.string(),
    date_of_birth: Yup.string().required('Required'),
    lang: Yup.string().required('Required'),
    phones: Yup.array().required(),
    description: Yup.string(),
    parents: Yup.array().required(),
    school_number: Yup.string(),
    city_id: Yup.string(),
    address: Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      email: '',
      date_of_birth: '',
      lang: '',
      phones: [],
      description: '',
      parents: [],
      school_number: '',
      city_id: '',
      address: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(updateProfile(values, (res) => {
        if (res) {
          return alert('Succesfully added!');
        }
        return alert('Something went Wrong!');
      }));
    }
  });
  return {
    formik, data, loading, error
  };
};
