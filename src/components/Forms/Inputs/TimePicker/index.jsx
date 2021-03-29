/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { Container } from './style';

export default ({ value, timeIntervals, onChange }) => (
  <Container>
    <DatePicker
      selected={value}
      onChange={(date) => onChange(date)}
      locale="en"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={timeIntervals}
      dateFormat="Pp"
    />
  </Container>
);
