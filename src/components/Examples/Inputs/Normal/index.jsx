import { InputGrid, InputsGroup } from "./style";
import { NormalInput } from "../../../Forms/Inputs";
export default () => {
  return (
    <InputsGroup>
      <InputGrid>
        <NormalInput white size="large" placeholder="Enter first name" />
        <NormalInput white size="medium" placeholder="Enter email" />
        <NormalInput white size="small" placeholder="Enter phone" />
      </InputGrid>
    </InputsGroup>
  );
};
