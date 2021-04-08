/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../../../../components/Buttons';
import Dropdown from '../../../../components/Forms/Dropdowns';
import { Container } from './style';

export default (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { id } = props;
  const { deleteTariff } = props;
  const { deleteTariffName } = props;
  return (
    <Container>
      {deleteTariffName
        ? (
          <Dropdown
            options={id.tariff_names}
            color="#FFFFFF"
            placeholder="Tariff names"
            name="tariff_names"
            value={name}
            onChange={(e) => setName(e)}
            size="large"
          />
        )
        : '' }
      {deleteTariff
        ? <PrimaryButton color="#f94144" title="Delete tariff" onClick={() => dispatch(deleteTariff(id))} />
        : deleteTariffName
          ? <PrimaryButton color="#f94144" title="Delete Tariff Name" onClick={() => dispatch(deleteTariffName({ id: id.id, name }))} />
          : null}
    </Container>
  );
};
