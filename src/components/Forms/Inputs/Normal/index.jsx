import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Input, Helper, InnerContainer, Label
} from './style';

const NormalInput = ({
  placeholder,
  disabled,
  size,
  helperText,
  type,
  label,
  ...others
}) => (
  <Container>
    {label
    && (
      <Label type={type} size={size}>
        {label}
      </Label>
    )}
    <InnerContainer>
      <Input
        type={type}
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
      />
    </InnerContainer>
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
NormalInput.propTypes = {
  size: PropTypes.string
};

NormalInput.defaultProps = {
  size: 'medium'
};

export default NormalInput;
