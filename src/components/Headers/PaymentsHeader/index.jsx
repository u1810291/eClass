/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  HR,
  Body,
  Steps,
  Navigate,
  CardBody,
  MainCard,
  InnerCard,
  Container,
  CardContent
} from '../style';
import Card from '../../Card';
import { getRandColor } from '../../../utils/random-color';
import { Wrapper } from '../../Styles/style';
import Circle from '../../Circle';
import Icon from '../../Icon';

export default () => (
  <Container>
    <Steps>
      <Circle size="60px" text="1" />
      <HR />
      <Circle size="60px" text="2" />
      <HR />
      <Circle size="60px" text="3" />
      <HR />
      <Circle size="60px" text="4" />
    </Steps>
    <Navigate>
      <Card size="small">
        <Body>
          <h3>Choose subject to pay</h3>
        </Body>
        <Navigate.Cards>
          <Wrapper className="scroll-container">
            <InnerCard>
              {[...Array(15)].map((_, i) => (
                <MainCard key={i}>
                  <Card color={getRandColor()}>
                    <CardContent color={getRandColor()}>
                      <Card>
                        <Icon icon="mdi_chemical-weapon" size="40px" />
                      </Card>
                      <CardBody>
                        {i}
                        {' '}
                        Hello
                      </CardBody>
                    </CardContent>
                  </Card>
                </MainCard>
              ))}
            </InnerCard>
          </Wrapper>
        </Navigate.Cards>
      </Card>
    </Navigate>
  </Container>
);
