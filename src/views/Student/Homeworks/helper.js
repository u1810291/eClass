/* eslint-disable no-alert */
import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import SubmitHomework from './SubmitHomework';
import { useHideModal } from '../../../hooks/modal';
import { submitHomework } from '../../../redux/modules/student/homeworks/actions';

const handleAdd = (id) => {
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    desc: Yup.string(),
    file: Yup.array().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      desc: '',
      file: []
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(submitHomework({ values, id }, (res) => {
        // eslint-disable-next-line no-alert
        if (res) {
          alert('Succesfully added!');
          hideModal();
        }
        if (!res) alert('Something went wrong!');
        return res;
      }));
    }
  });
  return { formik };
};
export const toolTips = [
  {
    name: 'Submit homework',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Submit homework',
        body: () => <SubmitHomework handleAdd={() => handleAdd(id)} />
      });
    }
  },
  {
    name: 'Update homework',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Update homework',
        body: () => <SubmitHomework handleAdd={() => handleAdd(id)} />
      });
    }
  },
  {
    name: 'Delete',
    icon: 'payment',
    onClick: () => {
      alert('Delete Homework');
    }
  },
  {
    name: 'Update',
    icon: 'payment',
    onClick: () => {
      alert('Update Homework');
    }
  }
];
