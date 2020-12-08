import { InputGrid, InputsGroup } from "./style";
import { NormalInput } from "../../../Forms/Inputs";

export default () => {
  return (
    <InputsGroup>
      <InputGrid>
        <NormalInput white size="large" placeholder="Enter first name" />
        <NormalInput white size="medium" placeholder="Enter phone number" />
        <NormalInput white size="small" placeholder="Enter email" />
      </InputGrid>
    </InputsGroup>
  );
};
