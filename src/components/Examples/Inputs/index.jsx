import React from 'react';
import IconInputs from './Icon';
import Searchable from './Search';
import ErrorInputs from './Error';
import NormalInput from './Normal';
import { InputsGroup } from './style';

export default ({ icon }) => (
  <InputsGroup>
    {icon ? (
      <>
        <div>
          <h4>Icon inputs</h4>
          <IconInputs icon={icon} />
        </div>
        <div>
          <h4>Searchable inputs</h4>
          <Searchable icon={icon} />
        </div>
        <div>
          <h4>Error inputs</h4>
          <ErrorInputs icon={icon} type="error" />
        </div>
        <div>
          <h4>Success inputs</h4>
          <NormalInput icon={icon} type="success" />
        </div>
      </>
    ) : (
      <>
        <div>
          <h4>Normal inputs</h4>
          <NormalInput type="normal" />
        </div>
        <div>
          <h4>Icon inputs</h4>
          <IconInputs />
        </div>
        <div>
          <h4>Searchable inputs</h4>
          <Searchable />
        </div>
        <div>
          <h4>Error inputs</h4>
          <ErrorInputs type="error" />
        </div>
        <div>
          <h4>Success inputs</h4>
          <NormalInput icon={icon} type="success" />
        </div>
      </>
    )}
  </InputsGroup>
);
