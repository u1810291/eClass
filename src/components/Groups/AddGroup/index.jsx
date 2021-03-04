import React from 'react';
import {
  Container, Body, Header, Footer, Main
} from './style';
import Card from '../../Card';

export default () => (
  <Container>
    <Card>
      <Body>
        <Header>
          Header
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
