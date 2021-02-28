/* eslint-disable no-alert */
import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import AddHomework from '../../../components/Lesson/AddHomework';
import { uploadFile } from '../../../redux/modules/files/actions';

const handleAdd = (id) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    desc: Yup.string(),
    from_date: Yup.string().required('Required'),
    till_date: Yup.string().required('Required'),
    file: Yup.array().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      desc: '',
      from_date: '',
      till_date: '',
      file: []
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(uploadFile({ values, id }, (res) => {
        // eslint-disable-next-line no-alert
        if (res) alert('Succesfully added!');
        if (!res) alert('Something went wrong!');
        return res;
      }));
    }
  });
  return { formik };
};
export const toolTips = [
  {
    name: 'Cancel',
    icon: 'payment',
    onClick: () => {
      alert('Cancel');
    }
  },

  {
    name: 'Reschedule',
    icon: 'payment',
    onClick: () => {
      alert('Reschedule');
    }
  },

  {
    name: 'Response',
    icon: 'payment',
    onClick: () => {
      alert('Response Reschedule');
    }
  },

  {
    name: 'Reject Reschedule',
    icon: 'payment',
    onClick: () => {
      alert('Reject Reschedule');
    }
  },

  {
    name: 'Add Rating',
    icon: 'payment',
    onClick: () => {
      alert('Add Rating');
    }
  },

  {
    name: 'Revoke Rating',
    icon: 'payment',
    onClick: () => {
      alert('Revoke Rating');
    }
  },

  {
    name: 'Add homework',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Add homework',
        body: () => <AddHomework handleAdd={() => handleAdd(id)} />
      });
    }
  },

  {
    name: 'Add controlwork',
    icon: 'payment',
    onClick: (id) => {
      alert(`Revoke Rating ${id}`);
    }
  }

];
