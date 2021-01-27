import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Dropdown from '../../../../components/Forms/Dropdowns';
import { dropdownOptions } from '../../../../data/dropdown';
import { Container, MainInfo } from './style';
import { NormalInput } from '../../../../components/Forms/Inputs';
import { setStudent } from '../../../../redux/modules/auth/actions';
import TextArea from '../../../../components/Forms/Inputs/TextArea';
import DatePicker from '../../../../components/Forms/Inputs/DatePicker';

export default () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(undefined);
  const [commonDropdown, setCommonDropdown] = useState(undefined);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username fieled is required'),
      password: Yup.string().required('Password field is required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(setStudent(values, () => {
        setSubmitting(false);
      }));
    }
  });
  return (
    <Container>
      <MainInfo>
        <NormalInput
          white
          size="large"
          placeholder="First name"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Last name"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Middle name"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Username"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />

        <NormalInput
          white
          size="large"
          placeholder="Password"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Email"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
      </MainInfo>
      <MainInfo.TextArea>
        <TextArea placeholder="Description" white />
      </MainInfo.TextArea>
      <MainInfo.Body>
        <DatePicker
          placeholder="Date"
          white
          size="large"
          name="rangeDate"
          value={date}
          change={(value) => setDate(value)}
          showTimePicker={false}
          dateFormat="YYYY-MM-DD"
          date={date}
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={commonDropdown}
          onChange={setCommonDropdown}
          size="large"
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={commonDropdown}
          onChange={setCommonDropdown}
          size="large"
        />
        <Dropdown
          color="#FFFFFF"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={commonDropdown}
          onChange={setCommonDropdown}
          size="large"
        />
        <NormalInput
          white
          size="large"
          placeholder="Email"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
        <NormalInput
          white
          size="large"
          placeholder="Email"
          type={formik.touched.username && formik.errors.username && 'error'}
          helperText={formik.touched.username && formik.errors.username && formik.errors.username}
          value={formik.values.username}
          onChange={(e) => formik.setFieldValue('username', e.target.value)}
        />
      </MainInfo.Body>

    </Container>
  );
};
