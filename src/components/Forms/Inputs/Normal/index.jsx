import { Container, Input, Label, Helper, InnerContainer } from "./style";
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
    <InnerContainer>
      <Input
        type={type}
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        {...others}
      />
      <Label>{label}</Label>
    </InnerContainer>
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
