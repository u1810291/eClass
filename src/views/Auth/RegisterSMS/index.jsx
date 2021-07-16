import React from 'react';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { confirmSMS, resentCode } from '../../../redux/modules/auth/actions';
import {
  Container, TextCenter, Animated, SignUp
} from '../style';
import { NormalInput } from '../../../components/Forms/Inputs';
import { AuthForm } from '../SignUp/style';
import { PrimaryButton } from '../../../components/Buttons';
import { useQuery } from '../../../hooks';

export default () => {
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    code: Yup.string().required('Code number is required')
  });
  const formik = useFormik({
    initialValues: {
      code: ''
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(confirmSMS({ code: values.code, user: query.get('username') }, (res) => {
        if (res) console.log(res);
      }));
    }
  });
  const resentPhoneCode = () => dispatch(resentCode({ user: query.get('username'), phone: query.get('phone') }));
  return (
    <Container>
      <Container.Center>
        <AuthForm onSubmit={formik.handleSubmit}>
          <Animated>
            <Animated.Header>
              <h1>
                <b>
                  Let&apos;s go!
                </b>
              </h1>
            </Animated.Header>
            <Animated.Body />
            <Animated.Header>
              We just messaged you.
            </Animated.Header>
          </Animated>
          <NormalInput
            white
            label="Please enter code we messaged you."
            size="large"
            placeholder="code"
            type={formik.touched.code && formik.errors.code && 'error'}
            helperText={formik.touched.code && formik.errors.code && formik.errors.code}
            value={formik.values.code}
            onChange={(e) => formik.setFieldValue('code', e.target.value)}
          />
          <PrimaryButton type="submit" title="Submit" size="large" />
          <TextCenter>
            <SignUp onClick={() => resentPhoneCode()}>
              Resent code
            </SignUp>
            or
            <SignUp onClick={() => history.push('/signin')}>
              Login
            </SignUp>
          </TextCenter>
        </AuthForm>
      </Container.Center>
    </Container>
  );
};
