import { Container, Input, Label, Helper } from "./style";
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
    <Icon icon={icon} />
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
