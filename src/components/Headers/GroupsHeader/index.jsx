import React from 'react';

import { useHistory } from 'react-router-dom';
import {
  Container, Body, TitleWrapper, Right
} from '../style';
import { PrimaryButton } from '../../Buttons';

export default () => {
  const history = useHistory();

  return (
    <Container>
      <Body>
        <TitleWrapper>
          <TitleWrapper.Title>Groups</TitleWrapper.Title>
          <TitleWrapper.Clear>Celar filter</TitleWrapper.Clear>
        </TitleWrapper>
        <Right>
          <PrimaryButton title="Add group" onClick={() => history.push('/groups/add')} />
        </Right>
      </Body>
    </Container>
  );
};
