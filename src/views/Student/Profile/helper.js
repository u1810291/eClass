/* eslint-disable no-alert */
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../redux/modules/student/profile/actions';

export const useEditForm = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.studentProfileReducers);
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    middle_name: Yup.string(),
    email: Yup.string(),
    date_of_birth: Yup.string().required('Required'),
    phones: Yup.array().required(),
    description: Yup.string(),
    parents: Yup.array().of(
      Yup.object().shape({
        first_name: Yup.string(),
        last_name: Yup.string(),
        phones: Yup.array().required()
      })
    ).required(),
    school_number: Yup.string(),
    city_id: Yup.string(),
    address: Yup.string()
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: data.first_name,
      last_name: data.last_name,
      middle_name: data.middle_name,
      email: data.email,
      date_of_birth: data.date_of_birth,
      phones: data.phones && data.phones.map((el) => ({ id: el.id, phone: el.phone })),
      parents: data.parents && data.parents.map(((el) => ({
        id: el.id,
        first_name: el.full_name.split(' ')[0],
        last_name: el.full_name.split(' ')[1],
        description: el.description,
        phones: el.phones.map((el) => ({ id: el.id, phone: el.phone }))
      }))),
      school_number: data.school_number,
      city_id: data.city_id,
      address: data.address && data.address.address,
      description: data.description
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      // eslint-disable-next-line no-console
      console.log(values);
      dispatch(updateProfile(values, (res) => {
        if (res) {
          return alert('Succesfully updated!');
        }
        return alert('Something went Wrong!');
      }));
    }
  });
  return {
    formik, data, loading, error
  };
};
