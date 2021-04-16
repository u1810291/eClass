import React, { useState, useEffect } from 'react';

/* eslint-disable no-unused-vars */
import moment from 'moment';
import { Container, DaysContainer, Item } from '../style';
import SingleDatePicker from '../../../Forms/Inputs/SingleDatePicker';
import CheckBox from '../../../CheckBox';
import { studyDays } from '../../../../constants/dropdown';

const StudyDays = ({ formik, single }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState([]);
  const handleTime = (id, value) => {
    const times = [{
      day_of_week: parseInt(id, 10),
      start_time: `${moment(value).format('HH:mm')}Z`
    }];
    if (time.find((el) => el.day_of_week === id)) {
      setTime(time.filter((el) => el.day_of_week !== id));
      return setTime((prev) => prev.concat(times));
    }
    return setTime((prev) => prev.concat(times));
  };
  useEffect(() => {
    formik.setValues({
      ...formik.values,
      study_days: time
    });
  }, [time, setTime]);
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
