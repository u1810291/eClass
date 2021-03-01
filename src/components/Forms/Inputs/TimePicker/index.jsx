/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { Container } from './style';

export default ({ date, setDate }) => (
  <Container>
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
    />
  </Container>
);
