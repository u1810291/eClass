/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Body,
  Container,
  TitleWrapper,
  Wrapper,
  SwitchButton
} from '../style';
import DatePicker from '../../Forms/Inputs/DatePicker';

export default ({
  date,
  total,
  clear,
  setDate,
  completed,
  setCompleted
}) => (
  <Container>
    <Body>
      <TitleWrapper>
        <TitleWrapper.Title>
          Homeworks
        </TitleWrapper.Title>
        <TitleWrapper.Clear onClick={clear}>
          Celar filter
        </TitleWrapper.Clear>
        Total works
        <SwitchButton.Counter>
          {total}
        </SwitchButton.Counter>
      </TitleWrapper>
      <Wrapper>
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
        <SwitchButton>
          <SwitchButton.Button completed={completed} type="button" onClick={() => setCompleted(false)}>
            <div>Not finished works</div>
          </SwitchButton.Button>
          <SwitchButton.Button completed={!completed} type="button" onClick={() => setCompleted(true)}>
            <div>Finished works</div>
          </SwitchButton.Button>
        </SwitchButton>
      </Wrapper>
    </Body>
  </Container>
);
