import { InputGrid } from "../style";
import { SearchableInput } from "../../../Forms/Inputs";
export default ({ icon, type }) => {
  return (
    <InputGrid>
      <SearchableInput
        white
        icon={icon}
        size="large"
        type={type}
        placeholder="Enter first name"
      />
      <SearchableInput
        white
        icon={icon}
        size="medium"
        type={type}
        placeholder="Enter email"
      />
      <SearchableInput
        white
        icon={icon}
        size="small"
        type={type}
        placeholder="Enter phone"
      />
    </InputGrid>
  );
};
