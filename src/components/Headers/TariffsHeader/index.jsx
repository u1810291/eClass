import React from 'react';

import {
  Container, Body, TitleWrapper
} from '../style';
import DatePicker from '../../Forms/Inputs/DatePicker';
import { PrimaryButton } from '../../Buttons';
import { useShowModal } from '../../../hooks/modal';
import TariffAdd from '../../../views/Admin/Tariff/Add';

export default ({
  setDate,
  date
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
        <PrimaryButton title="Add Tariff" onClick={() => { useShowModal({ title: 'Add Tariff', body: () => <TariffAdd /> }); }} />
      </div>
    </Body>
  </Container>
);
