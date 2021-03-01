/* eslint-disable no-alert */
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createLesson } from '../../../redux/modules/admin/groups/actions';
import CreateLesson from '../../../components/Groups/CreateLesson';

const handleCreate = (id) => {
  const dispatch = useDispatch();
  const history = useHistory();
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
          alert('Succesfully added!');
          return history.push('/groups');
        }
        return null;
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
