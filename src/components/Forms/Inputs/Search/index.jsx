import React from "react";
import { Container, Input, Helper } from "./style";
import Icon from "../../../Icon";
import PropTypes from "prop-types";

const NormalInput = ({
  placeholder,
  disabled,
  size,
  helperText,
  label,
  type,
  ...others
}) => (
  <Container>
    <Icon />
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
