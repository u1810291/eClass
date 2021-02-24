import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from '../style';

const CustomButton = React.forwardRef((props, ref) => (
  <CustomInput
    type={props.type}
    ref={ref}
    className="example-custom-input"
    onClick={props.onClick}
    white={props.white}
    style={props.style}
  >
    {props.value ? props.value : props.placeholder}
  </CustomInput>
));

CustomButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object
};

CustomButton.defaultProps = {
  style: {
    backgroundColor: '#ffffff'
  }
};

export default CustomButton;
