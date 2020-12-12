import { InputGrid, InputsGroup } from "./style";
import { NormalInput } from "../../../Forms/Inputs";

export default ({ icon }) => {
  return (
    <InputGrid>
      <NormalInput
        white
        icon={icon}
        size="large"
        placeholder="Enter first name"
      />
      <NormalInput
        white
        icon={icon}
        size="medium"
        placeholder="Enter phone number"
      />
      <NormalInput white icon={icon} size="small" placeholder="Enter email" />
    </InputGrid>
  );
};
