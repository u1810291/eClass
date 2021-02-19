import React from 'react';
import Library from '../../components/Library';
import LibraryHeader from '../../components/Headers/LibraryHeader';
import { Container } from '../../components/Styles/style';

export default () => (
  <Container>
    <LibraryHeader />
    <Library />
  </Container>
);
