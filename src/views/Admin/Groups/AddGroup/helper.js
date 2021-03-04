import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addGroup } from '../../../../redux/modules/admin/groups/actions';

export const usingFormik = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object.shape({
    name: Yup.string().required('Required'),
    official_name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    group_lang: Yup.string(),
    salary_percent: Yup.string(),
    price: Yup.string(),
    price_with_discount: Yup.string(),
    lesson_duration: Yup.string(),
    teacher_id: Yup.string(),
    subject_id: Yup.string(),
    group_names: Yup.array().required('Required'),
    study_days: Yup.array().required('Required'),
    start_date: Yup.string(),
    finish_date: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      official_name: '',
      description: '',
      group_lang: '',
      salary_percent: '',
      price: '',
      price_with_discount: '',
      lesson_duration: '',
      teacher_id: '',
      subject_id: '',
      group_names: [],
      study_days: [],
      start_date: '',
      finish_date: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(addGroup(values, (success) => {
        // eslint-disable-next-line no-alert
        alert('Succesfully added');
        return success;
      }));
    }
  });

  return formik;
};
