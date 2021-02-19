/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Body,
  Title,
  Navigate,
  CardBody,
  MainCard,
  InnerCard,
  Container,
  CardContent,
  SwitchButton
} from '../style';
import Card from '../../Card';
import { getRandColor } from '../../../utils/random-color';
import { Wrapper } from '../../Styles/style';
import Icon from '../../Icon';

export default () => (
  <Container>
    <Navigate>
      <Card size="small">
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
