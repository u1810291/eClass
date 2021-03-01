/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { Container } from './style';

export default ({ value, onChange }) => (
  <Container>
    <DatePicker
      selected={value}
      onChange={(date) => onChange(date)}
      locale="en"
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
    />
  </Container>
);
