/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Body,
  Title,
  Wrapper,
  Navigate,
  InnerCard,
  Container,
  SwitchButton
} from '../style';
import Card from '../../Card';
import { getRandColor } from '../../../utils/random-color';

export default () => (
  <Container>
    <Navigate>

      <Card size="small" white>
        <Body>
          <Title>Homeworks</Title>
          <SwitchButton>
            <SwitchButton.Button> Not finished works</SwitchButton.Button>
            <SwitchButton.Button> Finished works</SwitchButton.Button>
          </SwitchButton>
        </Body>
        <Navigate.Cards>
          <Wrapper className="scroll-container">
            <InnerCard>
              {[...Array(15)].map((_, i) => (
                <Card key={i} color={getRandColor()}>
                  {i}
                  {' '}
                  Hello
                </Card>
              ))}
            </InnerCard>
          </Wrapper>
        </Navigate.Cards>
      </Card>
    </Navigate>
  </Container>
);
