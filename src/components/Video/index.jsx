import React from 'react';
import { Container, CardContent } from './style';
import Card from '../Card';

export default () => (
  <Container>
    <Card>
      <CardContent>
        <CardContent.Header>
          1 Library
        </CardContent.Header>
        <CardContent.Body>
          <Card bordered>
            1 Videos
          </Card>
          <Card bordered>
            2 Videos
          </Card>
          <Card bordered>
            3 Videos
          </Card>
          <Card bordered>
            4 Videos
          </Card>
        </CardContent.Body>
      </CardContent>
    </Card>
  </Container>
);
