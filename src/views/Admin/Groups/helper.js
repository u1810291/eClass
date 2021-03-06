/* eslint-disable no-alert */
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createLesson } from '../../../redux/modules/admin/groups/actions';
import CreateLesson from '../../../components/Groups/CreateLesson';

const handleCreate = (id) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    start_date: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      start_date: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      const data = { group: id, start_date: values.start_date.toISOString() };
      dispatch(createLesson(data, (res) => {
        // eslint-disable-next-line no-alert
        if (res) {
          return alert('Succesfully added!');
        }
        return alert('Something went Wrong!');
      }));
    }
  });
  return { formik };
};

export const toolTips = [
  {
    name: 'Create lesson',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Add homework',
        body: () => <CreateLesson handleCreate={() => handleCreate(id)} />
      });
    }
  },
  {
    name: 'Delete group',
    icon: 'payment',
    onClick: () => {
      alert('Delete group');
    }
  },
  {
    name: 'Add student',
    icon: 'payment',
    onClick: () => {
      alert('Add student');
    }
  },
  {
    name: 'Delete student',
    icon: 'payment',
    onClick: () => {
      alert('Delete student');
    }
  }
];

export function useFormHandler() {
  const [formValues, setformValues] = useState([
    {
      name: '',
      lang: '',
      description: ''
    }
  ]);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    subject_lang: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    subject_names: Yup.array().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      subject_lang: '',
      description: '',
      subject_names: []
    },
    validationSchema
  });
  return { formik, formValues, setformValues };
}
