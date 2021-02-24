import React from 'react';
import { Container } from './style';
import { PrimaryButton } from '../../Buttons';

const DownloadCell = (files) => (
  <Container>
    {console.log(files)}
    {files
      ? <PrimaryButton title="Download" size="large" />
      : <span>No link provided</span>}
  </Container>
);

export default DownloadCell;
