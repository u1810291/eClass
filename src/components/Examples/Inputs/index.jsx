import NormalInput from "./Normal";
import Searchable from "./Search";
import ErrorInputs from "./Error";
import { InputsGroup } from "./style";
export default ({ icon }) => {
  return (
    <InputsGroup>
      {icon ? (
        <>
          <div>
            <h4>Normal inputs</h4>
            <NormalInput icon={icon} />
          </div>
          <div>
            <h4>Searchable inputs</h4>
            <Searchable icons={icons} />
          </div>
          <div>
            <h4>Error inputs</h4>
            <ErrorInputs icons={icons} type="error" />
          </div>
        </>
      ) : (
        <>
          <div>
            <h4>Normal inputs</h4>
            <NormalInput />
          </div>
          <div>
            <h4>Searchable inputs</h4>
            <Searchable />
          </div>
          <div>
            <h4>Error inputs</h4>
            <ErrorInputs type="error" />
          </div>
        </>
      )}
    </InputsGroup>
  );
};
