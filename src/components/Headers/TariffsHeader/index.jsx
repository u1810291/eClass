import React from 'react';

import {
  Container, Body, TitleWrapper
} from '../style';
import DatePicker from '../../Forms/Inputs/DatePicker';
import { PrimaryButton } from '../../Buttons';
import TariffAdd from '../../../views/Admin/Tariff/Add';
import { useAddForm } from '../../../views/Admin/Tariff/helper';

export default ({
  setDate,
  date,
  showBlured
}) => (
  <Container>
    <Body>
      <TitleWrapper>
        <TitleWrapper.Title>Lessons</TitleWrapper.Title>
        <TitleWrapper.Clear>Celar filter</TitleWrapper.Clear>
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
        <PrimaryButton
          title="Add Tariff"
          onClick={() => showBlured({
            title: 'Add Tariff',
            body: () => (
              <TariffAdd
                useAddForm={useAddForm}
              />
            )
          })}
        />
      </div>
    </Body>
  </Container>
);
