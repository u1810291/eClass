import { InputGrid, InputsGroup } from "./style";
import { SearchableInput } from "../../../Forms/Inputs";
export default ({ icon }) => {
  return (
    <InputGrid>
      <SearchableInput
        white
        icon={icon}
        size="large"
        placeholder="Enter first name"
      />
      <SearchableInput
        white
        icon={icon}
        size="medium"
        placeholder="Enter email"
      />
      <SearchableInput
        white
        icon={icon}
        size="small"
        placeholder="Enter phone"
      />
    </InputGrid>
  );
};
