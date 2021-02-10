import React, { useState } from 'react';
import {
  Container, Body, TitleWrapper, SwitchButton
} from '../style';
import Dropdowns from '../../Forms/Dropdowns';
import { dropdownOptions } from '../../../data/dropdown';

export default () => {
  const [multipleDropdown, setMultipleDropdown] = useState(undefined);

  return (
    <Container>
      <Body>
        <TitleWrapper>
          <TitleWrapper.Title>Lessons</TitleWrapper.Title>
          <TitleWrapper.Clear>Celar filter</TitleWrapper.Clear>
        </TitleWrapper>
        <SwitchButton>
          <Dropdowns
            placeholder="Sort by date"
            options={dropdownOptions.commonOptions}
            value={multipleDropdown}
            onChange={setMultipleDropdown}
            size="large"
            multiple
          />
        </SwitchButton>
      </Body>
    </Container>
  );
};
