/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Icon,
  StepTwo,
  StepFour,
  Navigate,
  MainCard,
  CardBody,
  Container,
  StepThree,
  InnerCard,
  CardContent
} from './style';
import { Wrapper } from '../Styles/style';
import { getRandColor } from '../../utils/random-color';
import Card from '../Card';

export default ({ data }) => {
  console.log(data);
  return (
    <Container>
      <StepTwo>
        <Navigate.Cards>
          <h3>Please choose one type of course</h3>
          <Wrapper className="scroll-container">
            <InnerCard>
              {[...Array(15)].map((_, i) => (
                <MainCard key={i}>
                  <Card>
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
      </StepTwo>
      <StepThree />
      <StepFour />

    </Container>
  );
};
