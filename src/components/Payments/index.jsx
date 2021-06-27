/* eslint-disable camelcase */
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
import Spinner from '../Spinner';
import Error from '../Error';

// eslint-disable-next-line no-unused-vars
export default ({ tariffs: { data, loading, error }, methods }) => (
  <Container>
    <StepTwo>
      <h3>Please choose one type of course</h3>
      <Navigate.Cards>
        {error ? <Error message={error} />
          : (
            <Wrapper className="scroll-container">
              {loading ? <Spinner contain black />
                : (
                  <InnerCard>
                    {data.map((el) => (
                      <MainCard key={el.id}>
                        <Card>
                          <CardContent color={getRandColor()}>
                            <Card>
                              <Icon />
                            </Card>
                            <CardBody>
                              <CardBody.Title>
                                <span>{el.name}</span>
                                <CheckBox />
                              </CardBody.Title>
                              <CardBody.Value>
                                {el.amount}
                                {' '}
                                sum
                              </CardBody.Value>
                            </CardBody>
                          </CardContent>
                        </Card>
                      </MainCard>
                    ))}
                  </InnerCard>
                )}
            </Wrapper>
          )}
      </Navigate.Cards>
    </StepTwo>
    <Footer>
      <StepThree>
        <PaymentType>
          <PaymentType.Title>
            Payment type
          </PaymentType.Title>
          {methods.map(({ id, method_name, active }) => active && (
            <PaymentType.List id={id}>
              <PaymentType.Text>
                {method_name}
              </PaymentType.Text>
            </PaymentType.List>
          ))}
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
