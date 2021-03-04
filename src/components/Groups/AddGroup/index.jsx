import React, { useState } from 'react';

import {
  Container, Body, Header, Footer, Main
} from './style';
import { NormalInput } from '../../Forms/Inputs';
import Dropdown from '../../Forms/Dropdowns';
import { dropdownOptions } from '../../../data/dropdown';

import Card from '../../Card';

export default () => {
  const [commonDropdown, setCommonDropdown] = useState(undefined);
  return (
    <Container>
      <Card>
        <Body>
          <Header>
            <NormalInput placeholder="Group name" />
            <NormalInput placeholder="Official name" />
            <Dropdown
              placeholder="Select"
              options={dropdownOptions.commonOptions}
              value={commonDropdown}
              onChange={setCommonDropdown}
              size="large"
            />
          </Header>
          <Main>
            <Dropdown
              placeholder="Select"
              options={dropdownOptions.commonOptions}
              value={commonDropdown}
              onChange={setCommonDropdown}
              size="large"
            />
            <Dropdown
              placeholder="Select"
              options={dropdownOptions.commonOptions}
              value={commonDropdown}
              onChange={setCommonDropdown}
              size="large"
            />

            <NormalInput placeholder="Percent for teacher" />
            <NormalInput placeholder="Number of room" />
            <NormalInput placeholder="Price for one lesson" />
            <NormalInput label="Price for one lesson with discount" placeholder="Price for one lesson with discount" />
          </Main>
          <Footer>
            Footer
          </Footer>
        </Body>
      </Card>
    </Container>
  );
};
