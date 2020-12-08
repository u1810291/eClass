import NormalInput from "./Normal";
import Searchable from "./Search";
import ErrorInputs from "./Error";
export default () => {
  return (
    <>
      <NormalInput />
      <Searchable />
      <ErrorInputs />
      <NormalInput />
    </>
  );
};
