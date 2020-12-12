import React from "react";
import { Container, Input, Label, Helper } from "./style";
import PropTypes from "prop-types";

const SearchableInput = ({
  placeholder,
  disabled,
  size,
  helperText,
  label,
  type,
  ...others
}) => (
  <Container>
    <Input
      type={type}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
      {...others}
    />
    <Label>{label}</Label>
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
SearchableInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

SearchableInput.defaultProps = {
  label: "",
  size: "medium",
};

export default SearchableInput;
