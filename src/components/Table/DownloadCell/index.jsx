import React from 'react';
import DownloadLink from 'react-download-link';
import { Container, Content } from './style';
import file from '../../../services/files';

const DownloadCell = (files) => {
  let id;
  if (files[0]) {
    const url = files[0].split('/');
    id = url[url.length - 1];
  }
  return (
    <Container size="large">
      {files[0]
        ? (
          <Content size="large">
            <DownloadLink
              label="Download"
              filename="filename.pdf"
              exportFile={() => Promise.resolve(file.downloadFile(id))}
            />
          </Content>
        )
        : <span>No link provided</span>}
    </Container>
  );
};
export default DownloadCell;
