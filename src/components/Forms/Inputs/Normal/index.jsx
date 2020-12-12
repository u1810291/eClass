import { Container, Input, Label, Helper } from "./style";
import PropTypes from "prop-types";
import Icon from "../../../Icon";
import { IconWrapper, getIconSize } from "../style";

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
    <IconWrapper>
      <Icon icon={icon} size={getIconSize(size)} />
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
NormalInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

NormalInput.defaultProps = {
  label: "",
  size: "medium",
};

export default NormalInput;
