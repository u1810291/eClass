import React from 'react';

import DatePicker from 'react-date-picker';
import { Container } from './style';

const CustomDatePickerV2 = ({ onChange, value, lang }) => (
  <Container>
    <DatePicker
      locale={lang}
      format="y-MM-dd"
      onChange={onChange}
      value={value}
    />
  </Container>
);

export default CustomDatePickerV2;
