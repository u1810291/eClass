import React from 'react';
import { Container } from './style';
import { PrimaryButton } from '../../Buttons';

const DownloadCell = (files) => (
  <Container>
    {files[0]
      ? <PrimaryButton title="Download" size="large" />
      : <span>No link provided</span>}
  </Container>
);

export default DownloadCell;
