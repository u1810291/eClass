import {InputGrid} from "../style";
import {IconInput} from "../../../Forms/Inputs";

export default ({icon, type}) => {
  return (
    <InputGrid>
      <IconInput white icon={icon} size="large" type={type} placeholder="Enter first name" />
      <IconInput white icon={icon} size="medium" type={type} placeholder="Enter phone number" />
      <IconInput white icon={icon} size="small" type={type} placeholder="Enter email" />
    </InputGrid>
  );
};
