import React from 'react';
import PropTypes from 'prop-types';
import { CircleBody } from './style';

const Circle = (props) => {
  const {
    size, color, text, active
  } = props;
  return (
    <CircleBody size={size} color={color} active={active}>
      {text}
    </CircleBody>
  );
};

Circle.prototypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string
};

Circle.defaultProps = {
  active: false,
  text: '',
  color: '#7F88B1',
  size: '1.5em'
};

export default Circle;
