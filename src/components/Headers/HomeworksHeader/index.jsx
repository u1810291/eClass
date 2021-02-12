/* eslint-disable react/no-array-index-key */
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import {
  Container, Body, Title, SwitchButton, Navigate, InnerCard
} from '../style';
import Card from '../../Card';

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
          <ScrollContainer>
            <InnerCard>
              {[...Array(15)].map((_, i) => (
                <Card key={i} color="#3E3E3E">
                  {i}
                  {' '}
                  Hello
                </Card>
              ))}
            </InnerCard>
          </ScrollContainer>
        </Navigate.Cards>
      </Card>
    </Navigate>
  </Container>
);
