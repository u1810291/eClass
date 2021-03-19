/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Icon from '../../../Icon';
import { Container, FileInputCustom, InputEement } from './style';

const FileInput = ({ setFieldValue, ...props }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.click();
  };
  const handleChange = (event) => {
    setFieldValue(event.target.files[0]);
  };
  return (
    <Container {...props}>
      <FileInputCustom {...props} type="button" onClick={handleClick}>
        <Icon icon="clip" />
      </FileInputCustom>
      <InputEement {...props} type="file" ref={ref} onChange={handleChange} />
    </Container>
  );
};

export default FileInput;
