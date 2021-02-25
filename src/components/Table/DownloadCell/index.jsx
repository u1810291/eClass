import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';
import { PrimaryButton } from '../../Buttons';

const DownloadCell = (files) => (
  <Container>
    {console.log(files)}
    {files[0]
      ? <Link to={files[0]}><PrimaryButton title="Download" size="large" /></Link>
      : <span>No link provided</span>}
  </Container>
);

export default DownloadCell;
