/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Icon,
  Pay,
  Footer,
  StepTwo,
  StepFour,
  Navigate,
  MainCard,
  CardBody,
  Container,
  StepThree,
  InnerCard,
  CardContent,
  PaymentType
} from './style';
import { Wrapper } from '../Styles/style';
import { getRandColor } from '../../utils/random-color';
import Card from '../Card';
import CheckBox from '../CheckBox';

export default () => (
  // console.log(data);
  <Container>
    <StepTwo>
      <h3>Please choose one type of course</h3>
      <Navigate.Cards>
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
                      <CardBody.Title>
                        {i}
                        {' '}
                        title
                      </CardBody.Title>
                      <CardBody.CheckBox>
                        <CheckBox />
                      </CardBody.CheckBox>
                      <CardBody.Value>

                        550.000 sum
                      </CardBody.Value>
                    </CardBody>
                  </CardContent>
                </Card>
              </MainCard>
            ))}
          </InnerCard>
        </Wrapper>
      </Navigate.Cards>
    </StepTwo>
    <Footer>

      <StepThree>
        <PaymentType>
          Payment type
          <PaymentType.List>
            Click
          </PaymentType.List>
          <PaymentType.List>
            Payme
          </PaymentType.List>
          <PaymentType.List>
            Onlin
          </PaymentType.List>
          <PaymentType.List>
            Cash
          </PaymentType.List>
        </PaymentType>
      </StepThree>
      <StepFour>
        <Pay>

          Some
        </Pay>
      </StepFour>
    </Footer>

  </Container>
);
