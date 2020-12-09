import NormalInput from "./Normal";
import Searchable from "./Search";
import ErrorInputs from "./Error";
import { InputsGroup } from "./style";
export default ({ icon }) => {
  return (
    <InputsGroup>
      {icon ? (
        <>
          <NormalInput icon={icon} />
          <Searchable icons={icons} />
          <ErrorInputs icons={icons} />
        </>
      ) : (
        <>
          <NormalInput />
          <Searchable />
          <ErrorInputs />
        </>
      )}
    </InputsGroup>
  );
};
