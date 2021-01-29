/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Dropdown from '../../../../components/Forms/Dropdowns';
import { PrimaryButton } from '../../../../components/Buttons';
import { dropdownOptions } from '../../../../data/dropdown';
import { Container, MainInfo, SubmitForm } from './style';
import { NormalInput, TagsInput } from '../../../../components/Forms/Inputs';
import { setStudent } from '../../../../redux/modules/auth/actions';
import TextArea from '../../../../components/Forms/Inputs/TextArea';
import DatePicker from '../../../../components/Forms/Inputs/DatePicker';
import Parents from './Parents';

export default () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(undefined);
  const [commonDropdown, setCommonDropdown] = useState(undefined);
  const getPath = window.location.pathname.split('/');

  // eslint-disable-next-line func-names
  Yup.addMethod(Yup.array, 'unique', function (message, mapper = (a) => a) {
  // eslint-disable-next-line react/no-this-in-sfc
    return this.test('unique', message, (list) => list.length === new Set(list.map(mapper)).size);
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      email: '',
      date_of_birth: '',
      lang: 'ru',
      phones:
    [
      {
        phone: '',
        description: ''
      }
    ],
      description: '',
      parents: [
        {
          full_name: '',
          description: '',
          phones: [
            {
              phone: '',
              description: ''
            }
          ]
        }
      ],
      school_number: '',
      city_name: '',
      address: ''
    },
    validationSchema: Yup.object({

      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      middle_name: Yup.string().required('Middle name is required'),
      email: Yup.string().email().required('Email is required'),
      date_of_birth: Yup.string().required('Date of birth is required'),
      lang: 'ru',
      phone: Yup.array().required('Phone is required').of(Yup.number().positive().integer()).unique('Phone numbers must be unique'),
      phone_description: Yup.string().required('Description to number is required'),
      comment_description: Yup.string(),
      parent_full_name: Yup.string().required('Full name is required'),
      parent_description: Yup.string(),
      parent_phone: Yup.string(),
      parent_phone_description: Yup.string(),
      school_number: Yup.string().required('School is required'),
      city_name: Yup.string().required('City is required'),
      address: Yup.string().required('Address is required'),
      specialization: Yup.string().required('Specialization is required')

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
      <SubmitForm onSubmit={formik.handleSubmit}>

        <MainInfo>
          <NormalInput
            white
            size="large"
            placeholder="First name"
            type={formik.touched.first_name && formik.errors.first_name && 'error'}
            helperText={formik.touched.first_name && formik.errors.first_name && formik.errors.first_name}
            value={formik.values.first_name}
            onChange={(e) => formik.setFieldValue('first_name', e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Last name"
            type={formik.touched.last_name && formik.errors.last_name && 'error'}
            helperText={formik.touched.last_name && formik.errors.last_name && formik.errors.last_name}
            value={formik.values.last_name}
            onChange={(e) => formik.setFieldValue('last_name', e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Middle name"
            type={formik.touched.middle_name && formik.errors.middle_name && 'error'}
            helperText={formik.touched.middle_name && formik.errors.middle_name && formik.errors.middle_name}
            value={formik.values.middle_name}
            onChange={(e) => formik.setFieldValue('middle_name', e.target.value)}
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
            type={formik.touched.password && formik.errors.password && 'error'}
            helperText={formik.touched.password && formik.errors.password && formik.errors.password}
            value={formik.values.password}
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Email"
            type={formik.touched.email && formik.errors.email && 'error'}
            helperText={formik.touched.email && formik.errors.email && formik.errors.email}
            value={formik.values.email}
            onChange={(e) => formik.setFieldValue('email', e.target.value)}
          />
        </MainInfo>
        <MainInfo.TextArea>
          <TextArea placeholder="Description" white />
        </MainInfo.TextArea>
        <MainInfo.Body>
          <DatePicker
            placeholder="Date of birth"
            white
            size="large"
            name="rangeDate"
            value={formik.values.date_of_birth = date}
            change={(value) => setDate(value)}
            showTimePicker={false}
            dateFormat="YYYY-MM-DD"
            date={date}
          />
          <Dropdown
            color="#FFFFFF"
            placeholder="Language"
            options={dropdownOptions.commonOptions}
            value={commonDropdown}
            onChange={setCommonDropdown}
            size="large"
          />
          <Dropdown
            color="#FFFFFF"
            placeholder="Country"
            options={dropdownOptions.commonOptions}
            value={commonDropdown}
            onChange={setCommonDropdown}
            size="large"
          />
          <Dropdown
            color="#FFFFFF"
            placeholder="City"
            options={dropdownOptions.commonOptions}
            value={commonDropdown}
            onChange={setCommonDropdown}
            size="large"
          />
          <NormalInput
            white
            size="large"
            placeholder="Address"
            type={formik.touched.address && formik.errors.address && 'error'}
            helperText={formik.touched.address && formik.errors.address && formik.errors.address}
            value={formik.values.address}
            onChange={(e) => formik.setFieldValue('address', e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="School number"
            type={formik.touched.school_number && formik.errors.school_number && 'error'}
            helperText={formik.touched.school_number && formik.errors.school_number && formik.errors.school_number}
            value={formik.values.school_number}
            onChange={(e) => formik.setFieldValue('school_number', e.target.value)}
          />
        </MainInfo.Body>
        <MainInfo.Phone>
          <TagsInput
            white
            placeholder="Phones"
            size="large"
            defaultValue={formik.values.phone}
            type={formik.touched.phone && formik.errors.phone && 'error'}
            helperText={formik.touched.phone && formik.errors.phone && formik.errors.phone}
            onChange={(e) => formik.setFieldValue('phone', e)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Description"
            type={formik.touched.phone_description && formik.errors.phone_description && 'error'}
            helperText={formik.touched.phone_description && formik.errors.phone_description && formik.errors.phone_description}
            value={formik.values.phone_description}
            onChange={(e) => formik.setFieldValue('phone_description', e.target.value)}
          />
          <NormalInput
            white
            size="large"
            placeholder="Specialization"
            type={formik.touched.username && formik.errors.username && 'error'}
            helperText={formik.touched.username && formik.errors.username && formik.errors.username}
            value={formik.values.username}
            onChange={(e) => formik.setFieldValue('username', e.target.value)}
          />
          <Dropdown
            color="#FFFFFF"
            placeholder="Subjects"
            options={dropdownOptions.commonOptions}
            value={commonDropdown}
            onChange={setCommonDropdown}
            size="large"
          />
        </MainInfo.Phone>
        {getPath[getPath.length - 1] === 'student' ? <Parents formik={formik} /> : ''}
        <PrimaryButton title="Sign in" type="submit" size="medium" />
      </SubmitForm>
    </Container>
  );
};
