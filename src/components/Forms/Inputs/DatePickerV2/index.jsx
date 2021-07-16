import React from 'react';

import DatePicker from 'react-date-picker';
import { Label } from '../Normal/style';
import { Container, MainContainer } from './style';

const CustomDatePickerV2 = ({
  onChange, value, lang, placeholder, label
}) => (
  <MainContainer>
    {label && <Label>{label}</Label>}
    <Container>
      <DatePicker
        locale={lang}
        format="y-MM-dd"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  </MainContainer>
);

export default CustomDatePickerV2;
