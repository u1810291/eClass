import { IconWrapper, DynamicIcon } from "./style";
const Icon = ({ icon, size, color }) => {
  return (
    <IconWrapper>
      <DynamicIcon icon={icon} size={size} color={color} />
    </IconWrapper>
  );
};
export default Icon;
