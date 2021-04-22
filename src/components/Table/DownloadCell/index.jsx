import React from 'react';
import { Container, Content } from './style';
import service from '../../../services/student/exercise';

const DownloadCell = (files) => (
  <Container size="large">
    {files[0]
      ? (
        <button
          type="button"
          onClick={() => {
            service.downloadExercise(files[0]).then((response) => {
              const extension = response.headers['content-type'].split('/');
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', `${files[0]}.${extension[1]}`); // or any other extension
              document.body.appendChild(link);
              link.click();
              link.parentNode.removeChild(link);
            });
          }}
        >
          <Content size="large">
            Donwload
          </Content>
        </button>
      )
      : <span>No link provided</span>}
  </Container>
);
export default DownloadCell;
