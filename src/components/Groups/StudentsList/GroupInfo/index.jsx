import React from 'react';

import { Left, Text } from '../style';
import Card from '../../../Card';
import Spinner from '../../../Spinner';

const GroupInfo = ({ data }) => (
  <Left>
    {data
      ? (
        <Card bordered>
          <Text>
            <Text.Left>Description: </Text.Left>
            <Text.Right>{data.description}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Name</Text.Left>
            <Text.Right>{data.name}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Finish date</Text.Left>
            <Text.Right>{data.finish_data}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Lesson duration</Text.Left>
            <Text.Right>{data.lesson_duration}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Price:</Text.Left>
            <Text.Right>{data.price}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Price with discount:</Text.Left>
            <Text.Right>{data.price_with_discount}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Salary percentage</Text.Left>
            <Text.Right>{data.salary_percent}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Start date</Text.Left>
            <Text.Right>{data.start_date}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Subject name</Text.Left>
            <Text.Right>{data.subject && data.subject.name}</Text.Right>
          </Text>
          <Text>
            <Text.Left>Teacher</Text.Left>
            <Text.Right>{data.teacher && data.teacher.full_name}</Text.Right>
          </Text>
        </Card>
      ) : <Spinner black contain />}
  </Left>
);
export default GroupInfo;
