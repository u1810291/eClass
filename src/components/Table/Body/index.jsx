import React from 'react';
import { Container, Header, Body } from './style';
import Item from '../Item';
import Icon from '../../Icon';
import { header, bodyItem } from './data';

export default () => (
  <Container>
    <Header>
      {header.length
          && header.map((i) => (
            <Header.Item key={i.id}>
              {i.value}
              {' '}
              <Icon icon="bottom" size="1em" color="#97A0C3" />
            </Header.Item>
          ))}
    </Header>
    <Body>
      Body
      {bodyItem.map((item, index) => (
        <Item key={index + 1} data={item} />
      ))}
    </Body>
  </Container>
);
