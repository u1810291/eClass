import React from 'react';

import DatePicker from 'react-date-picker';
import { Container } from './style';

const CustomDatePickerV2 = ({ onChange, value }) => (
  <Container>
    <DatePicker
      onChange={onChange}
      value={value}
    />
  </Container>
);

export default CustomDatePickerV2;
