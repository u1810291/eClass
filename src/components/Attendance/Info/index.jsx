import React from 'react';
import { Container, Text } from './style';

export default ({ event }) => (
  <Container>
    <Text>
      <Text.Right>Have attended students:</Text.Right>
      <Text.Left>{event.event.attendances}</Text.Left>
    </Text>
    <Text>
      <Text.Right> Canceled:</Text.Right>
      <Text.Left>
        {event.event.canceled}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Duration:</Text.Right>
      <Text.Left>
        {event.event.duration}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Finished:</Text.Right>
      <Text.Left>
        {event.event.finished}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Finished at:</Text.Right>
      <Text.Left>
        {event.event.finished_at}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Group Description:</Text.Right>
      <Text.Left>
        {event.event.group_description}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Group name</Text.Right>
      <Text.Left>
        {event.event.group_name}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Teacher name:</Text.Right>
      <Text.Left>
        {event.event.teacher.name}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Subject name:</Text.Right>
      <Text.Left>
        {event.event.subject_name}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Rescheduled:</Text.Right>
      <Text.Left>
        {event.event.rescheduled}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Scheduled start at:</Text.Right>
      <Text.Left>
        {event.event.scheduled_start}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Started:</Text.Right>
      <Text.Left>
        {event.event.started}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Started at:</Text.Right>
      <Text.Left>
        {event.event.started_at}
      </Text.Left>
    </Text>
    <Text>
      <Text.Right>Students:</Text.Right>
      <Text.Left>
        {event.event.students}
      </Text.Left>
    </Text>

  </Container>
);
