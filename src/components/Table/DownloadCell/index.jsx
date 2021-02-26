import React from 'react';
import DownloadLink from 'react-download-link';
import { Container } from './style';
import { PrimaryButton } from '../../Buttons';
import file from '../../../services/files';

const DownloadCell = (files) => (
  <Container>
    {console.log(files[0])}
    {files[0]
      ? (
        <PrimaryButton
          title="Download"
          size="large"
          onClick={() => (
            <DownloadLink
              label=""
              filename="filename.pdf"
              exportFile={() => file.downloadFile(files[0])}
            />
          )}
        />
      )
      : <span>No link provided</span>}
  </Container>
);

export default DownloadCell;
