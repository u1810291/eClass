import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Input, Label, Helper
} from './style';

const LinkedlInput = ({
  placeholder, disabled, size, helperText, label, type, ...others
}) => (
  <Container>
    <Input
      type={type}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...others}
    />
    <Label />
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
LinkedlInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string
};

LinkedlInput.defaultProps = {
  label: '',
  size: 'medium'
};

export default LinkedlInput;
