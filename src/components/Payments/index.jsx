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

import Cash from '../../assets/icons/cash.svg';
import Payme from '../../assets/icons/payme.svg';
import Online from '../../assets/icons/online.svg';
import Click from '../../assets/icons/click.svg';

export default ({ data }) => {
  console.log(data);
  return (
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
              <PaymentType.Icon icon={Click} />
              <PaymentType.Text>
                Click
              </PaymentType.Text>
            </PaymentType.List>
            <PaymentType.List>
              <PaymentType.Icon icon={Payme} />
              <PaymentType.Text>
                Payme
              </PaymentType.Text>
            </PaymentType.List>
            <PaymentType.List>
              <PaymentType.Icon icon={Online} />
              <PaymentType.Text>
                Online
              </PaymentType.Text>
            </PaymentType.List>
            <PaymentType.List>
              <PaymentType.Icon icon={Cash} />
              <PaymentType.Text>
                Cash
              </PaymentType.Text>
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
};
