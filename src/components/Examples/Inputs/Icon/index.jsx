import React from 'react';
import { InputGrid } from '../style';
import { IconInput } from '../../../Forms/Inputs';

export default ({ icon, type }) => (
  <InputGrid>
    <IconInput white icon={icon} size="large" placeholder="Enter first name" type={type} />
    <IconInput white icon={icon} size="medium" placeholder="Enter email" type={type} />
    <IconInput white icon={icon} size="small" placeholder="Enter phone" type={type} />
  </InputGrid>
);
