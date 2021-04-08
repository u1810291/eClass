/* eslint-disable no-nested-ternary */
import React from 'react';

import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../../../../components/Buttons';
import { Container } from './style';

export default (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const { deleteTariff } = props;
  const { deleteTariffName } = props;
  return (
    <Container>
      Delete
      {deleteTariff
        ? <PrimaryButton title="Delete tariff" onClick={() => dispatch(deleteTariff(id))} />
        : deleteTariffName
          ? <PrimaryButton title="Delete Tariff Name" onClick={() => dispatch(deleteTariffName(id))} />
          : null}
    </Container>
  );
};
