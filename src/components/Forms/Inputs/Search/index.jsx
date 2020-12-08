import React from "react";
import { Container, Input, Helper, IconWrapper } from "./style";
import Icon from "../../../Icon";
import PropTypes from "prop-types";

const NormalInput = ({
  placeholder,
  disabled,
  size,
  helperText,
  label,
  type,
  icon,
  ...others
}) => (
  <Container>
    <IconWrapper>{icon ? <Icon icon={icon} /> : ""}</IconWrapper>
    <Input
      type={type}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
      {...others}
    />
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
NormalInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

NormalInput.defaultProps = {
  label: "",
  size: "medium",
};

export default NormalInput;
