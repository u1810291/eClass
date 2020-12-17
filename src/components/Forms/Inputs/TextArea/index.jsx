import { TextArea } from "./style";
import classNames from "classnames";
export default (props) => {
  return (
    <TextArea
      className={classNames("text-black-400", "body-medium", "weight-regular")}
      {...props}
    />
  );
};
