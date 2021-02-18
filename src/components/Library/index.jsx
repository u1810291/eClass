/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Content } from './style';
import Card from '../Card';
import Icon from '../Icon';

export default () => (
  <Container>
    <Content>
      <Card size="small">
        <Content.Header>
          1 Library
        </Content.Header>
        {
          [...Array(15)].map((_, i) => (
            <Content.Item key={i}>
              <Icon icon="folder-open" size="30px" />
              <Content.ItemBody>
                <Content.ItemTop>English</Content.ItemTop>
                <Content.ItemBottom>Subjeect</Content.ItemBottom>
                <Content.Cancel>
                  <Icon icon="cross" size="10px" />
                </Content.Cancel>
              </Content.ItemBody>
            </Content.Item>
          ))
        }
      </Card>
    </Content>
    <Card size="small">
      2 Library
    </Card>
    <Card size="small">
      3 Library
    </Card>
  </Container>
);
