/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './style';
import Icon from '../../Icon';

const PrimaryButton = ({
  title, size, iconAlign, icon, color, ...others
}) => (iconAlign.includes(['right' || 'Right']) ? (
  <Container size={size} color={color} {...others}>
    <Title icon={icon}>{title}</Title>
    <Icon icon={icon} color={color} />
  </Container>
) : (
  <Container size={size} color={color} {...others}>
    <Icon icon={icon} color={color} />
    <Title>{title}</Title>
  </Container>
));

PrimaryButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  iconAlign: PropTypes.string
};
PrimaryButton.defaultProps = {
  title: '',
  size: 'medium',
  iconAlign: 'right'
};

export default PrimaryButton;
