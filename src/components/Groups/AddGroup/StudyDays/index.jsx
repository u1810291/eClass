import React, { useState } from 'react';

import { Container, DaysContainer, Item } from '../style';
import SingleDatePicker from '../../../Forms/Inputs/SingleDatePicker';
import CheckBox from '../../../CheckBox';
import { studyDays } from '../../../../constants/dropdown';

const StudyDays = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  console.log(time);

  return (
    <Container>
      <DaysContainer>
        {studyDays.map((el) => (
          <Item key={el.id}>
            <Item.Head>
              <CheckBox />
              {el.weekDay}
            </Item.Head>
            <SingleDatePicker
              showTimeSelectOnly
              timeFormat="HH:mm"
              value={date}
              showTimeSelect
              placeholder="Date"
              name="start_date"
              onChange={(value) => { setTime((prev) => [{ prev, value }]); setDate(value); }}
            />
          </Item>
        ))}
      </DaysContainer>
    </Container>
  );
};

export default StudyDays;
