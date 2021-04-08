/* eslint-disable no-alert */
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Update from './Update';
import Delete from './Delete';
import { deleteTariff, updateTariff, deleteTariffName } from '../../../redux/modules/admin/tariffs/actions';

export const useUpdateForm = (id) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    name: Yup.string().required('Required'),
    description: Yup.string(),
    amount: Yup.string().required('Required'),
    lessons_count: Yup.string().required('Required'),
    tariff_name_ru: Yup.string().required('Required'),
    tariff_description_ru: Yup.string(),
    tariff_name_uz: Yup.string().required(),
    tariff_description_uz: Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      first_name: '',
      id,
      name: '',
      description: '',
      amount: '',
      lessons_count: '',
      tariff_name_ru: '',
      tariff_description_ru: '',
      tariff_name_uz: '',
      tariff_description_uz: ''
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
    onClick: (id, { showBlured }) => {
      showBlured({
        title: 'Update Tariff',
        body: () => <Update id={id} useUpdateForm={useUpdateForm} />
      });
    }
  }
];
