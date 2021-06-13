import React from 'react';

import {
  Container, Students, Text, Body
} from './style';
import Card from '../../Card';
import GroupInfo from './GroupInfo';

export default ({ data }) => (
  <Container>
    <GroupInfo />
    <Body>
      {data && data.map((el) => (
        <Card bordered key={`key-${el.id}`}>
          <Text>
            <Text.Left>Adderss:</Text.Left>
            <Text.Right>
              {el.address.address}
            </Text.Right>
          </Text>
          <Text>
            <Text.Left>
              Date of birth:
            </Text.Left>
            {el.date_of_birth}
          </Text>
          <Text>
            <Text.Left>Description:</Text.Left>
            {el.description}
          </Text>
          <Text>
            <Text.Left>
              Email:
            </Text.Left>
            {el.email}
          </Text>
          <Text>
            <Text.Left>
              First name:
            </Text.Left>
            {el.first_name}
          </Text>
          <Text>
            <Text.Left>
              Last name:
            </Text.Left>
            {el.last_name}
          </Text>
          <Text>
            <Text.Left>
              Middle name:
            </Text.Left>
            {el.middle_name}
          </Text>
          {el.parents.map((item) => (
            <Students key={`key-${item.id}`}>
              <Text>
                <Text.Left>
                  Parent role
                </Text.Left>
                {item.description}
              </Text>
              <Text>
                <Text.Left>
                  Parent name
                </Text.Left>
                {item.full_name}
              </Text>
              <Text>
                <Text.Left>
                  Parent phone
                </Text.Left>
                {item.phones.map((phone) => <Students key={`key-${item.id}`}>{phone.phone}</Students>)}
              </Text>
            </Students>
          ))}
          <Text>
            <Text.Left>
              Phone:
            </Text.Left>
            {el.phones.map((item) => (
              <Students key={`key-${item.id}`}>
                {item.phone}
                {' '}
              </Students>
            ))}
          </Text>
          <Text>
            <Text.Left>
              School number:
            </Text.Left>
            {el.school_number}
          </Text>
          <Text>
            <Text.Left>
              Trial lessons:
            </Text.Left>
            {el.trial_lessons}
          </Text>
          <Text>
            <Text.Left>
              Username:
            </Text.Left>
            {el.username}
          </Text>
          <Text>
            <Text.Left>
              Confirmed by admin:
            </Text.Left>
            {el.confirmed_by_admin.toString()}
          </Text>
          <Text>
            <Text.Left>
              Limited:
            </Text.Left>
            {el.limited.toString()}
          </Text>
        </Card>
      ))}
    </Body>
  </Container>
);
