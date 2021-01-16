import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Input, Label, Helper, InnerContainer
} from './style';

const NormalInput = ({
  placeholder, disabled, size, helperText, label, type, ...others
}) => (
  <Container>
    <InnerContainer>
      <Input
        type={type}
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
      />
      <Label>{label}</Label>
    </InnerContainer>
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
