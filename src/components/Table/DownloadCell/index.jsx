import React from 'react';
import DownloadLink from 'react-download-link';
import { Container, Content } from './style';
import file from '../../../services/files';

const DownloadCell = (files) => (
  <Container size="large">
    {files[0]
      ? (
        <Content size="large">
          <DownloadLink
            label="Download"
            filename="filename.pdf"
            exportFile={() => file.downloadFile(files[0])}
          />
        </Content>
      )
      : <span>No link provided</span>}
  </Container>
);

export default DownloadCell;
