import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, Body, TitleWrapper
} from '../style';
import { DatePicker } from '../../Forms/Inputs';
import { PrimaryButton } from '../../Buttons';

export default ({
  setDate,
  date
}) => {
  const history = useHistory();

  return (
    <Container>
      <Body>
        <TitleWrapper>
          <TitleWrapper.Title>Groups</TitleWrapper.Title>
          <TitleWrapper.Clear>Celar filter</TitleWrapper.Clear>
        </TitleWrapper>
        <div>
          <PrimaryButton title="Add group" onClick={() => history.push('/groups/add')} />
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
};
