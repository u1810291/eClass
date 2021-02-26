import React from 'react';
import DownloadLink from 'react-download-link';
import { Container } from './style';
import { PrimaryButton } from '../../Buttons';
import file from '../../../services/files';

const DownloadCell = (files) => (
  <Container>
    {files[0]
      ? (
        <DownloadLink
          label="Download"
          filename="filename.pdf"
          exportFile={() => file.downloadFile(files[0])}
        >
          <PrimaryButton
            title="Download"
            size="large"
          />
        </DownloadLink>
      )
      : <span>No link provided</span>}
  </Container>
);

export default DownloadCell;
