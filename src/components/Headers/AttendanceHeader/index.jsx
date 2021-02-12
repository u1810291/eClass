/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Body,
  Icon,
  Title,
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

export default () => (
  <Container>
    <div>

      <Navigate>
        <Card size="small">
          <Body>
            <Title>Homeworks</Title>
          </Body>
          <Navigate.Cards>
            <Wrapper className="scroll-container">
              <InnerCard>
                {[...Array(15)].map((_, i) => (
                  <MainCard key={i}>
                    <Card color={getRandColor()}>
                      <CardContent color={getRandColor()}>
                        <Card>
                          <Icon />
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
    </div>
  </Container>
);
