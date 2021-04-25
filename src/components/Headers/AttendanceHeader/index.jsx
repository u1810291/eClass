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
  CardContent
} from '../style';
import Card from '../../Card';
import { getRandColor } from '../../../utils/random-color';
import { Wrapper } from '../../Styles/style';
import Icon from '../../Icon';

export default ({ subjects }) => (
  <Container>
    <Navigate>
      <Card size="small">
        <Body>
          <Title>Attendance</Title>
        </Body>
        <Navigate.Cards>
          <Wrapper className="scroll-container">
            <InnerCard>
              {subjects.length && subjects.map((el) => (
                <MainCard key={el.id}>
                  <Card color={getRandColor()}>
                    <CardContent color={getRandColor()}>
                      <Card>
                        <Icon icon="mdi_chemical-weapon" size="40px" />
                      </Card>
                      <CardBody>
                        {el.name}
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
