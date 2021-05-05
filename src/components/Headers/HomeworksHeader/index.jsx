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
  setDate,
  date,
  setCompleted
}) => (
  <Container>
    <Body>
      <TitleWrapper>
        <TitleWrapper.Title>Homeworks</TitleWrapper.Title>
        <TitleWrapper.Clear onClick={() => {
          setDate(undefined);
          setCompleted(undefined);
        }}
        >
          Celar filter
        </TitleWrapper.Clear>
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
          <SwitchButton.Button type="button" onClick={() => setCompleted(false)}>
            <div>Not finished works</div>
            <SwitchButton.Counter>15</SwitchButton.Counter>
          </SwitchButton.Button>
          <SwitchButton.Button type="button" onClick={() => setCompleted(true)}>
            <div>Finished works</div>
            <SwitchButton.Counter>15</SwitchButton.Counter>
          </SwitchButton.Button>
        </SwitchButton>
      </Wrapper>
    </Body>
  </Container>
);
