import React from 'react';
import classNames from 'classnames';
import {
  Container, InnerContainer, Helper, TextArea
} from './style';

export default ({
  placeholder,
  disabled,
  size,
  helperText,
  type,
  ...others
}) => (

  <Container>
    <InnerContainer>
      <TextArea
        className={classNames(
          'text-black-400',
          'body-medium',
          'weight-regular'
        )}
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
