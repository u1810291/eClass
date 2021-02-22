/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import InputCustom from './CustomButton';
import { DatePickerContainer, Container } from './style';

const SingleDatePicker = ({
  placeholder,
  value,
  onChange,
  white,
  style,
  ...props
}) => (
  <Container>
    <DatePickerContainer
      placeholderText={placeholder}
      selected={value}
      onChange={onChange}
      customInput={
        <InputCustom style={style} white={white} placeholder={placeholder} />
      }
      {...props}
    />
  </Container>
);

SingleDatePicker.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

SingleDatePicker.defaultProps = {
  placeholder: 'Date',
  value: '',
  onChange: () => {}
};

export default SingleDatePicker;
