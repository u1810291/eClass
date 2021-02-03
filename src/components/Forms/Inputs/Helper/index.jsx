import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Input, Label, Helper, HelperWrapper
} from './style';

const NormalInput = ({
  helper, placeholder, disabled, size, helperText, label, type, icon, ...others
}) => (
  <Container>
    <HelperWrapper size={size}>
      {helper || ''}
    </HelperWrapper>
    <Input
      type={type}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...others}
    />
    <Label>{label}</Label>
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
NormalInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string
};

NormalInput.defaultProps = {
  label: '',
  size: 'medium'
};

export default NormalInput;
