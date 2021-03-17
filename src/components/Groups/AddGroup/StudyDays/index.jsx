import React, { useState, useEffect } from 'react';

import moment from 'moment';
import { Container, DaysContainer, Item } from '../style';
import SingleDatePicker from '../../../Forms/Inputs/SingleDatePicker';
import CheckBox from '../../../CheckBox';
import { studyDays } from '../../../../constants/dropdown';

const StudyDays = ({ formik }) => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState();
  const [time, setTime] = useState([]);
<<<<<<< HEAD
  const handleTimeTime = (id, value) => {
    const times = { day_of_week: id, start_time: moment(value).format('HH:mm') };
    if (time.length !== 0) {
=======
  const handleTime = (id, value) => {
    const times = [{ day_of_week: parseInt(id, 10), start_time: `${moment(value).format('HH:mm')}Z` }];
    if (time.find((el) => el.day_of_week === id)) {
>>>>>>> f51f466e62127a84d65ff6617b1f8fa778ba95f0
      setTime(time.filter((el) => el.day_of_week !== id));
      return setTime((prev) => prev.concat(times));
    }
    return setTime((prev) => prev.concat(times));
  };
<<<<<<< HEAD

=======
  useEffect(() => {
    formik.setValues({
      ...formik.values,
      study_days: time
    });
  }, [time, setTime]);
>>>>>>> f51f466e62127a84d65ff6617b1f8fa778ba95f0
  return (
    <Container>
      <DaysContainer>
        {studyDays.map((el, i) => (
          <Item key={el.id}>
            <Item.Head>
              <CheckBox
                onChange={() => setTime(time.filter((item) => item.day_of_week !== i + 1))}
              />
              {el.weekDay}
            </Item.Head>
            <SingleDatePicker
              showTimeSelectOnly
              timeFormat="HH:mm"
              // value={date}
              showTimeSelect
              placeholder="Time"
              name="start_date"
              onChange={(value) => { handleTime(el.id, value); setDate(value); }}
            />
          </Item>
        ))}
      </DaysContainer>
    </Container>
  );
};

export default StudyDays;
