/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Body,
  Container,
  Title,
  DateWrapper,
  SwitchButton
} from '../style';
import DatePicker from '../../Forms/Inputs/DatePicker';

export default ({
  setDate,
  date,
  setCompleted
}) => (
  <Container>
    <Body>
      <Title>Homeworks</Title>
      <SwitchButton>
        <SwitchButton.Button type="button" onClick={() => setCompleted(false)}>
          <div>Not finished works</div>
          <SwitchButton.Counter>15</SwitchButton.Counter>
        </SwitchButton.Button>
        <SwitchButton.Button type="button" onClick={() => setCompleted(true)}>
          <div>Finished works</div>
          <SwitchButton.Counter>15</SwitchButton.Counter>
        </SwitchButton.Button>
      </SwitchButton>
    </Body>
    <DateWrapper>
      <DatePicker
        placeholder="Date"
        name="rangeDate"
        value={date}
        change={(value) => setDate(value)}
        showTimePicker={false}
        dateFormat="YYYY-MM-DD"
        date={date}
        white
        right
      />
    </DateWrapper>
  </Container>
);
