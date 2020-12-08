import { IconWrapper } from "./style";
import PropTypes from "prop-types";
import IcommonReact from "icomoon-react";
import iconSet from "../../assets/icons/design/icons.json";

const Icon = (props) => {
  const { icon, size, color, classNames } = props;
  return (
    <IcommonReact
      className={classNames}
      iconSet={iconSet}
      size={size}
      color={color}
      icon={icon}
    />
  );
};

Icon.prototypes = {
  classNames: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  classNames: "",
  color: "#262626",
  size: "1.5em",
};

export default Icon;
