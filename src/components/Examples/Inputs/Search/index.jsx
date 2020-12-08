import { InputGrid, InputsGroup } from "./style";
import { SearchableInput } from "../../../Forms/Inputs";
export default () => {
  return (
    <InputsGroup>
      <InputGrid>
        <SearchableInput white size="large" placeholder="Enter first name" />
        <SearchableInput white size="medium" placeholder="Enter email" />
        <SearchableInput white size="small" placeholder="Enter phone" />
      </InputGrid>
    </InputsGroup>
  );
};
