import React from 'react';
import { InputGrid } from '../style';
import { NormalInput } from '../../../Forms/Inputs';

export default ({ type }) => (
  <InputGrid>
    <NormalInput white size="large" placeholder="Enter name" type={type} />
    <NormalInput white size="medium" placeholder="Enter email" type={type} />
    <NormalInput white size="small" placeholder="Enter phone" type={type} />
  </InputGrid>
);
