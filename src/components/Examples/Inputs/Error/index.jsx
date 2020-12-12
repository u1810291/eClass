import { InputGrid } from "../style";
import { NormalInput } from "../../../Forms/Inputs";

export default ({ icon, type }) => {
  return (
    <InputGrid>
      <NormalInput
        white
        icon={icon}
        size="large"
        type={type}
        placeholder="Enter first name"
      />
      <NormalInput
        white
        icon={icon}
        size="medium"
        type={type}
        placeholder="Enter phone number"
      />
      <NormalInput
        white
        icon={icon}
        size="small"
        type={type}
        placeholder="Enter email"
      />
    </InputGrid>
  );
};
