/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content } from './style';
import Card from '../Card';
import Icon from '../Icon';

export default () => (
  <Container>
    <Card size="small">
      <Content>
        <Content.Header>
          1 Library
        </Content.Header>
        {
          [...Array(12)].map((_, i) => (
            <Content.Item key={i}>

              <Content.ItemBody>
                <Content.ItemTop>English</Content.ItemTop>
                <Content.ItemBottom>Subjeect</Content.ItemBottom>
                <Content.Cancel>
                  <Icon icon="cross" size="5px" />
                </Content.Cancel>
              </Content.ItemBody>
            </Content.Item>
          ))
        }
      </Content>
    </Card>
    <Card size="small">
      2 Library
    </Card>
    <Card size="small">
      3 Library
    </Card>
  </Container>
);
