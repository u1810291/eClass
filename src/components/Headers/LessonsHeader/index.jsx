import React from 'react';
import {
  Container, Body, TitleWrapper
} from '../style';
import DatePicker from '../../Forms/Inputs/DatePicker';

export default ({
  setDate,
  date
}) => (
  <Container>
    <Body>
      <TitleWrapper>
        <TitleWrapper.Title>Lessons</TitleWrapper.Title>
        <TitleWrapper.Clear onClick={() => setDate(undefined)}>Celar filter</TitleWrapper.Clear>
      </TitleWrapper>
      <div>
        <DatePicker
          placeholder="Date"
          name="rangeDate"
          value={date}
          change={(value) => setDate(value)}
          showTimePicker={false}
          dateFormat="YYYY-MM-DD"
          date={date}
          white
          right={false}
        />
      </div>
    </Body>
  </Container>
);
