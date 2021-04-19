import React from 'react';

import { Container } from './style';
import { NormalInput } from '../../../../components/Forms/Inputs';
import Dropdown from '../../../../components/Forms/Dropdowns';
import { PrimaryButton } from '../../../../components/Buttons';

export default ({ useTopup }) => {
  const { tariffs, formik } = useTopup();
  return (
    <Container onSubmit={formik.handleSubmit}>
      <Dropdown
        placeholder="Language"
        options={tariffs}
        type={formik.touched.tariff
                && formik.errors.tariff && 'error'}
        helperText={formik.errors.tariff}
        value={formik.values.tariff}
        onChange={(e) => formik.setFieldValue('tariff', e)}
        size="large"
      />
      <NormalInput
        label="Group Amount"
        size="large"
        placeholder="Amount"
        type={formik.touched.amount && formik.errors.amount && 'error'}
        helperText={formik.touched.amount
               && formik.errors.amount && formik.errors.amount}
        value={formik.values.amount}
        onChange={(e) => formik.setFieldValue('amount', e.target.value)}
        name="amount"
      />
      <PrimaryButton type="submit" title="Add Student" size="medium" />

    </Container>
  );
};
