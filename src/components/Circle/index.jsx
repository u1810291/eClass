import React from 'react';
import PropTypes from 'prop-types';
import { CircleBody } from './style';

export const Circle = (props) => {
  const { size, color, text } = props;
  return (
    <CircleBody size={size} color={color} text={text} />
  );
};

Circle.prototypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Circle.defaultProps = {
  text: '',
  color: '#7F88B1',
  size: '1.5em'
};

export default Circle;
