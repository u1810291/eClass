import React, { useState } from 'react';

import { SingleDatePicker, DatePicker, CustomDatePickerV2 } from '../../../Forms/Inputs';

export default () => {
  const [date, setDate] = useState();
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <SingleDatePicker
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <DatePicker
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <CustomDatePickerV2
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};
