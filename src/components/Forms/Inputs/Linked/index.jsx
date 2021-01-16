import {Container, Input, Label, Helper} from "./style";
import PropTypes from "prop-types";

const LinkedlInput = ({placeholder, disabled, size, helperText, label, type, ...others}) => (
  <Container>
    <Input type={type} disabled={disabled} size={size} placeholder={placeholder} {...others} />
    <Label></Label>
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
LinkedlInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

LinkedlInput.defaultProps = {
  label: "",
  size: "medium",
};

export default LinkedlInput;
