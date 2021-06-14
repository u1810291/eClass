/* eslint-disable camelcase */
import React from 'react';

import { useDispatch } from 'react-redux';
import {
  Body, Text, Students, IconContainer
} from '../style';
import Card from '../../../Card';
import Icon from '../../../Icon';

const StudentsList = ({ data, deleteStudent, group_id }) => {
  const dispatch = useDispatch();
  return (
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
            <Text.Right>
              {el.email}
            </Text.Right>
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
                {item.phones.map((phone) => <Text.Right key={`key-${item.id}`}>{phone.phone}</Text.Right>)}
              </Text>
            </Students>
          ))}
          <Text>
            <Text.Left>
              Phone:
            </Text.Left>
            {el.phones.map((item) => (
              <Text.Right key={`key-${item.id}`}>
                {item.phone}
              </Text.Right>
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
            <Text.Right>
              {el.username}
            </Text.Right>
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
          <br />
          <IconContainer onClick={() => deleteStudent(dispatch, group_id, el.id)}>
            <Icon icon="bin" />
          </IconContainer>
        </Card>
      ))}
    </Body>
  );
};

export default StudentsList;
