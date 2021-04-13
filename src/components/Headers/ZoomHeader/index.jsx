import React from 'react';

import {
  Container, Body, TitleWrapper
} from '../style';
import DatePicker from '../../Forms/Inputs/DatePicker';
import { PrimaryButton } from '../../Buttons';
import AccountAdd from '../../../views/Admin/ZoomAccounts/Add';
import { useAddForm } from '../../../views/Admin/ZoomAccounts/helper';

export default ({
  setDate,
  date,
  showBlured
}) => (
  <Container>
    <Body>
      <TitleWrapper>
        <TitleWrapper.Title>Zoom</TitleWrapper.Title>
        <TitleWrapper.Clear>Celar filter</TitleWrapper.Clear>
      </TitleWrapper>
      <Body.Right>
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
        <PrimaryButton
          title="Add Zoom Account"
          onClick={() => showBlured({
            title: 'Add Zoom Account',
            body: () => (
              <AccountAdd
                useAddForm={useAddForm}
              />
            )
          })}
        />
      </Body.Right>
    </Body>
  </Container>
);
