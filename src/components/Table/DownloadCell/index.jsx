import React from 'react';
import { Container, Content } from './style';
import service from '../../../services/files';
// 0: "https://five-plus.co/api/v1/files/download/b1efe1c9-013f-4ee3-9a60-ae26f594008b"

const DownloadCell = (files) => (
  <Container size="large">
    {console.log(files[0].split('/')[files[0].split('/').length - 1])}
    {files[0]
      ? (
        <Content size="large">
          <a href={service.downloadFile(files[0].split('/')[files[0].split('/').length - 1])}>Donwload</a>
        </Content>
      )
      : <span>No link provided</span>}
  </Container>
);
export default DownloadCell;
