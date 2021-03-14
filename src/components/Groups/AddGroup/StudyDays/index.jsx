import React, { useState } from 'react';

import { Container, DaysContainer, Item } from '../style';
import SingleDatePicker from '../../../Forms/Inputs/SingleDatePicker';
import CheckBox from '../../../CheckBox';

export default () => {
  const [date, setDate] = useState(new Date());
  const studyDays = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container>
      <DaysContainer>
        {studyDays.map((el) => (
          <Item key={el}>
            <CheckBox />
            <SingleDatePicker
              showTimeSelectOnly
              value={date}
              showTimeSelect
              placeholder="Date"
              name="start_date"
              onChange={(value) => setDate(value)}
            />
          </Item>
        ))}
      </DaysContainer>
    </Container>
  );
};
