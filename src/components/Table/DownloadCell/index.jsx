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
            service.downloadExercise(files[0]);
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
