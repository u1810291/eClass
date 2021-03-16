/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import moment from 'moment';
import { Container, DaysContainer, Item } from '../style';
import SingleDatePicker from '../../../Forms/Inputs/SingleDatePicker';
import CheckBox from '../../../CheckBox';
import { studyDays } from '../../../../constants/dropdown';

const StudyDays = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState();
  const [time, setTime] = useState([]);
  const handleTimeTime = (id, value) => {
    const times = { day_of_week: id, start_time: moment(value).format('HH:mm') };
    if (time.length !== 0) {
      setTime(time.filter((el) => el.day_of_week !== id));
    } else {
      setTime((prev) => prev.concat(times));
    }
  };

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
              // value={date}
              showTimeSelect
              placeholder="Date"
              name="start_date"
              onChange={(value) => { handleTimeTime(el.id, value); setDate(value); }}
            />
          </Item>
        ))}
      </DaysContainer>
    </Container>
  );
};

export default StudyDays;
