import React from 'react';

import {
  Container, Body, Header, Footer, Main
} from './style';
import { NormalInput } from '../../Forms/Inputs';
import Card from '../../Card';

export default () => (
  <Container>
    <Card>
      <Body>
        <Header>
          <NormalInput placeholder="Group name" />
          <NormalInput placeholder="Official name" />
        </Header>
        <Main>
          Main
        </Main>
        <Footer>
          Footer
        </Footer>
      </Body>
    </Card>
  </Container>
);
