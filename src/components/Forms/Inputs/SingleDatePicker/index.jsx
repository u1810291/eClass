/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import InputCustom from './CustomButton';
import { DatePickerContainer, Container, Helper } from './style';

const SingleDatePicker = ({
  placeholder,
  value,
  onChange,
  white,
  style,
  helperText,
  type,
  size,
  showTimeSelect,
  dateFormat,
  timeFormat,
  showTimeSelectOnly,
  filterDate,
  ...props
}) => (
  <Container type={type}>
    <DatePickerContainer
      showTimeSelectOnly={showTimeSelectOnly}
      showTimeSelect={showTimeSelect}
      placeholderText={placeholder}
      selected={value}
      onChange={onChange}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      filterDate={filterDate}
      customInput={
        <InputCustom type={type || 'button'} style={style} white={white} placeholder={placeholder} />
      }
      timeClassName={(time) => (time.getHours() > 12 ? 'text-success' : 'text-error')}
      {...props}
    />
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);

SingleDatePicker.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

SingleDatePicker.defaultProps = {
  placeholder: 'Date',
  onChange: () => {}
};

export default SingleDatePicker;
