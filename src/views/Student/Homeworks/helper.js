/* eslint-disable no-alert */
import React from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import AddHomework from '../../../components/Lesson/AddHomework';
import { useHideModal } from '../../../hooks/modal';
import { } from '../../../redux/modules/student/homeworks/actions';

const handleAdd = (id) => {
  const { hideModal } = useHideModal();
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
      dispatch(addHomework({ values, id }, (res) => {
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
