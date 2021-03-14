import React, { useState } from 'react';

import { Container, DaysContainer, Item } from '../style';
import SingleDatePicker from '../../../Forms/Inputs/SingleDatePicker';
import CheckBox from '../../../CheckBox';

export default () => {
  const [date, setDate] = useState(new Date());
  const studyDays = [
    {
      id: 1,
      weekDay: 'Monday'
    },
    {
      id: 2,
      weekDay: 'Tuesday'
    },
    {
      id: 3,
      weekDay: 'Wednesday'
    },
    {
      id: 4,
      weekDay: 'Thursday'
    },
    {
      id: 5,
      weekDay: 'Friday'
    },
    {
      id: 6,
      weekDay: 'Saturday'
    },
    {
      id: 7,
      weekDay: 'Sunday'
    }];
  return (
    <Container>
      <DaysContainer>
        {studyDays.map((el) => (
          <Item key={el.id}>
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
