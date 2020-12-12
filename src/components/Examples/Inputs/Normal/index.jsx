import { InputGrid } from "../style";
import { NormalInput } from "../../../Forms/Inputs";
export default ({ icon, type }) => {
  return (
    <InputGrid>
      <NormalInput
        white
        icon={icon}
        size="large"
        placeholder="Enter first name"
        type={type}
      />
      <NormalInput
        white
        icon={icon}
        size="medium"
        placeholder="Enter email"
        type={type}
      />
      <NormalInput
        white
        icon={icon}
        size="small"
        placeholder="Enter phone"
        type={type}
      />
    </InputGrid>
  );
};
