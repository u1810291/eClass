import React from 'react';
import DownloadLink from 'react-download-link';
import { Container, Content } from './style';
import { service } from '../../../services';

const DownloadCell = (files) => (
  <Container size="large">
    {files[0]
      ? (
        <Content size="large">
          <DownloadLink
            label="Download"
            filename="filename.pdf"
            exportFile={() => Promise((resolve, reject) => service.get(files[0])
              .then((res) => resolve(res))
              .catch((err) => reject(err)))}
          />
        </Content>
      )
      : <span>No link provided</span>}
  </Container>
);
export default DownloadCell;
