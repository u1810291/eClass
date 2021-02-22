/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { regStudent } from '../../../../../redux/modules/auth/actions';

import Dropdown from '../../../../../components/Forms/Dropdowns';
import { PrimaryButton } from '../../../../../components/Buttons';
import { dropdownOptions } from '../../../../../data/dropdown';
import {
  Container, MainInfo, SubmitForm, Body
} from './style';
import { NormalInput, TagsInput } from '../../../../../components/Forms/Inputs';
import TextArea from '../../../../../components/Forms/Inputs/TextArea';
import DatePicker from '../../../../../components/Forms/Inputs/DatePicker';
import { useInfoForm } from './hooks';

export default () => {
  const [parentFullname, setParentFullname] = useState();
  // const { formik } = useInfoForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string().required('Middle name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string().required('Email is required'),
    date_of_birth: Yup.object().shape({ value: Yup.string() }).required('Date of birth is required'),
    lang: Yup.string().required('Language required'),
    phone: Yup.array().required('Phone is required'),
    country: Yup.string().required('Country is required'),
    // city_name: Yup.string().required('City is required'),
    school_number: Yup.string().required('School is required'),
    address: Yup.string().required('Address is required'),
    phone_description: Yup.string().required('Description to number is required'),
    comment_description: Yup.string().required('Comment is required'),
    parent_first_name: Yup.string().required('Full name is required'),
    parent_last_name: Yup.string().required('Full name is required'),
    parent_middle_name: Yup.string().required('Full name is required'),
    // parent_description: Yup.string().required('Description is required'),
    parent_phone: Yup.array().required('Phone is required'),
    parent_phone_description: Yup.string().required('Description is required')
  });
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      middle_name: '',
      username: '',
      password: '',
      email: '',
      date_of_birth: '',
      lang: undefined,
      country: '',
      // city_name: '',
      school_number: '',
      address: '',
      phone: [],
      phone_description: '',
      comment_description: '',
      parent_first_name: '',
      parent_last_name: '',
      parent_middle_name: '',
      // parent_description: '',
      parent_phone: [],
      parent_phone_description: ''
    },

    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      dispatch(regStudent(values, (data) => {
        setSubmitting(false);
        console.log(data);
      }));
      history.push('/users');
    }
  });

  console.log(formik);
  return (
    <>
      <Container>
        <SubmitForm onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        >
          <MainInfo>
            <NormalInput
              white
              name="first_name"
              size="large"
              placeholder="First name"
              type={formik.touched.first_name && formik.errors.first_name && 'error'}
              helperText={formik.touched.first_name
                && formik.errors.first_name && formik.errors.first_name}
              value={formik.values.first_name}
              onChange={(e) => formik.setFieldValue('first_name', e.target.value)}
            />
            <NormalInput
              white
              size="large"
              placeholder="Last name"
              type={formik.touched.last_name && formik.errors.last_name && 'error'}
              helperText={formik.touched.last_name
                && formik.errors.last_name && formik.errors.last_name}
              value={formik.values.last_name}
              name="last_name"
              onChange={(e) => formik.setFieldValue('last_name', e.target.value)}
            />
            <NormalInput
              white
              size="large"
              placeholder="Middle name"
              type={formik.touched.middle_name && formik.errors.middle_name && 'error'}
              helperText={formik.touched.middle_name
                && formik.errors.middle_name && formik.errors.middle_name}
              value={formik.values.middle_name}
              name="middle_name"
              onChange={(e) => formik.setFieldValue('middle_name', e.target.value)}
            />
            <NormalInput
              white
              size="large"
              placeholder="Username"
              type={formik.touched.username && formik.errors.username && 'error'}
              helperText={formik.touched.username
                && formik.errors.username && formik.errors.username}
              value={formik.values.username}
              name="username"
              onChange={(e) => formik.setFieldValue('username', e.target.value)}
            />
            <NormalInput
              white
              size="large"
              placeholder="Password"
              type={formik.touched.password && formik.errors.password && 'error'}
              helperText={formik.touched.password
                && formik.errors.password && formik.errors.password}
              value={formik.values.password}
              name="password"
              onChange={(e) => formik.setFieldValue('password', e.target.value)}
            />
            <NormalInput
              white
              size="large"
              placeholder="Email"
              type={formik.touched.email && formik.errors.email && 'error'}
              helperText={formik.touched.email
                && formik.errors.email && formik.errors.email}
              value={formik.values.email}
              name="email"
              onChange={(e) => formik.setFieldValue('email', e.target.value)}
            />
          </MainInfo>
          <MainInfo.TextArea>
            <TextArea
              white
              placeholder="Description"
              type={formik.touched.comment_description
                && formik.errors.comment_description && 'error'}
              helperText={formik.touched.comment_description
                && formik.errors.comment_description
                && formik.errors.comment_description}
              value={formik.values.comment_description}
              name="comment_description"
              onChange={(e) => formik.setFieldValue('comment_description', e.target.value)}
            />
          </MainInfo.TextArea>
          <MainInfo.Body>
            <DatePicker
              placeholder="Date of birth"
              white
              size="large"
              name="date_of_birth"
              value={formik.values.date_of_birth}
              change={(value) => formik.setFieldValue('date_of_birth', `${value}`)}
              showTimePicker={false}
              dateFormat="YYYY-MM-DD"
              date={formik.values.date_of_birth}
            />
            <Dropdown
              color="#FFFFFF"
              placeholder="Language"
              name="lang"
              options={dropdownOptions.commonOptions}
              value={formik.values.lang}
              onChange={(e) => formik.setFieldValue('lang', e)}
              size="large"
            />
            <Dropdown
              color="#FFFFFF"
              placeholder="Country"
              name="country"
              options={dropdownOptions.commonOptions}
              value={formik.values.country}
              onChange={(e) => formik.setFieldValue('country', e)}
              size="large"
            />
            <Dropdown
              color="#FFFFFF"
              placeholder="City"
              name="city"
              options={dropdownOptions.commonOptions}
              value={formik.values.city}
              onChange={(e) => formik.setFieldValue('city', e)}
              size="large"
            />
            <NormalInput
              white
              size="large"
              placeholder="Address"
              name="address"
              type={formik.touched.address && formik.errors.address && 'error'}
              helperText={formik.touched.address
                && formik.errors.address && formik.errors.address}
              value={formik.values.address}
              onChange={(e) => formik.setFieldValue('address', e.target.value)}
            />
            <NormalInput
              white
              size="large"
              placeholder="School number"
              name="school_number"
              type={formik.touched.school_number && formik.errors.school_number && 'error'}
              helperText={formik.touched.school_number
                && formik.errors.school_number
                && formik.errors.school_number}
              value={formik.values.school_number}
              onChange={(e) => formik.setFieldValue('school_number', e.target.value)}
            />
          </MainInfo.Body>
          <MainInfo.Phone>
            <TagsInput
              white
              placeholder="Phones"
              size="large"
              name="phone"
              defaultValue={formik.values.phone}
              type={formik.touched.phone && formik.errors.phone && 'error'}
              helperText={formik.touched.phone
                && formik.errors.phone && formik.errors.phone}
              onChange={(e) => formik.setFieldValue('phone', [e])}
            />
            <NormalInput
              white
              size="large"
              placeholder="Description"
              name="phone_description"
              type={formik.touched.phone_description
              && formik.errors.phone_description && 'error'}
              helperText={formik.touched.phone_description
                && formik.errors.phone_description
                && formik.errors.phone_description}
              value={formik.values.phone_description}
              onChange={(e) => formik.setFieldValue('phone_description', e.target.value)}
            />
          </MainInfo.Phone>
          <Body>
            <MainInfo>
              <NormalInput
                white
                size="large"
                placeholder="First name"
                name="parent_first_name"
                type={
                  formik.touched.parent_first_name
                      && formik.errors.parent_first_name && 'error'
                }
                helperText={formik.touched.parent_first_name
                      && formik.errors.parent_first_name
                      && formik.errors.parent_first_name}
                value={formik.values.parent_first_name}
                onChange={(e) => formik.setFieldValue('parent_first_name', e.target.value)}
              />
              <NormalInput
                white
                size="large"
                placeholder="First name"
                name="parent_last_name"
                type={
                  formik.touched.parent_last_name
                      && formik.errors.parent_last_name && 'error'
                }
                helperText={formik.touched.parent_last_name
                      && formik.errors.parent_last_name
                      && formik.errors.parent_last_name}
                value={formik.values.parent_last_name}
                onChange={(e) => formik.setFieldValue('parent_last_name', e.target.value)}
              />
              <NormalInput
                white
                size="large"
                placeholder="First name"
                name="parent_middle_name"
                type={
                  formik.touched.parent_middle_name
                      && formik.errors.parent_middle_name && 'error'
                }
                helperText={formik.touched.parent_middle_name
                      && formik.errors.parent_middle_name
                      && formik.errors.parent_middle_name}
                value={formik.values.parent_middle_name}
                onChange={(e) => formik.setFieldValue('parent_middle_name', e.target.value)}
              />
            </MainInfo>
            <MainInfo.TextArea>
              <TextArea placeholder="Description" white />
            </MainInfo.TextArea>
            <MainInfo.Phone>
              <TagsInput
                white
                placeholder="Phones"
                size="large"
                defaultValue={formik.values.parent_phone}
                type={formik.touched.parent_phone && formik.errors.parent_phone && 'error'}
                helperText={formik.touched.parent_phone
                      && formik.errors.parent_phone && formik.errors.parent_phone}
                onChange={(e) => formik.setFieldValue('parent_phone', [e])}
              />
              <NormalInput
                white
                size="large"
                placeholder="Description"
                type={formik.touched.parent_phone_description
                    && formik.errors.parent_phone_description && 'error'}
                helperText={formik.touched.parent_phone_description
                      && formik.errors.parent_phone_description
                      && formik.errors.parent_phone_description}
                value={formik.values.parent_phone_description}
                onChange={(e) => formik.setFieldValue('parent_phone_description', e.target.value)}
              />
            </MainInfo.Phone>
          </Body>
          <PrimaryButton title="Create Student" type="submit" size="medium" />
        </SubmitForm>
      </Container>
    </>
  );
};
