import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Input, Label, Helper, IconWrapper
} from './style';
import Icon from '../../../Icon';

const SearchableInput = ({
  placeholder, disabled, size, helperText, label, type, icon, ...others
}) => (
  <Container>
    <IconWrapper size={size}>
      <Icon icon="search" color="#9d9d9d" />
    </IconWrapper>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Input type={type} disabled={disabled} size={size} placeholder={placeholder} {...others} />
    <Label>{label}</Label>
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
SearchableInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string
};

SearchableInput.defaultProps = {
  label: '',
  size: 'medium'
};

export default SearchableInput;
