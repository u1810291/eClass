import { Container, Input, Label, Helper, IconWrapper } from "./style";
import PropTypes from "prop-types";
import Icon from "../../../Icon";

const SearchableInput = ({
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
    <IconWrapper size={size}>
      <Icon icon="clip" color="#9d9d9d" />
    </IconWrapper>
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
