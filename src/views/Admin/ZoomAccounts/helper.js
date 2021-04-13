/* eslint-disable no-alert */
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Update from './Update';
import Delete from './Delete';
import {
  deleteTariff, updateTariff, deleteTariffName, createTariff, fetchData
} from '../../../redux/modules/admin/zoom/actions';
import { useHideModal } from '../../../hooks/modal';

export const useUpdateForm = (row) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required')
  });
  const formik = useFormik({
    initialValues: {
      id: row.id
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(updateTariff(values, (res) => {
        setSubmitting(false);
        // eslint-disable-next-line no-alert
        if (res) alert('Succesfully updated');
        return res;
      }));
    }
  });
  return { formik };
};

export const useAddForm = () => {
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    description: Yup.string(),
    reserved_for: Yup.string(),
    personal: Yup.bool()
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      description: '',
      reserved_for: '',
      personal: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(createTariff(values, (res) => {
        setSubmitting(false);
        // eslint-disable-next-line no-alert
        if (res) alert('Succesfully created');
        hideModal();
        return fetchData();
      }));
    }
  });
  return { formik };
};

export const toolTips = [
  {
    name: 'Delete',
    icon: 'payment',
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Delete Tariff',
        body: () => <Delete id={id} deleteTariff={deleteTariff} />
      });
    }
  },
  {
    name: 'Delete Tariff Name',
    icon: 'payment',
    onClick: (_, { row, showBlured }) => {
      showBlured({
        title: 'Delete Tariff name',
        body: () => <Delete id={row.original} deleteTariffName={deleteTariffName} />
      });
    }
  },
  {
    name: 'Update',
    icon: 'payment',
    onClick: (_, { row, showBlured }) => {
      showBlured({
        title: 'Update Tariff',
        body: () => <Update row={row.original} useUpdateForm={useUpdateForm} />
      });
    }
  }
];
