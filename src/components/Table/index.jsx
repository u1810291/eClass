import {useState} from "react";
import {Container, Filter} from "./style";
import Body from "./Body";
import Droprown from "../Forms/Dropdowns";
import classNames from "classnames";
import {commonOption} from "./option";

export default () => {
  const [commonDropdown, setCommonDropdown] = useState(1);

  return (
    <Container>
      <Filter>
        <Filter.Title className={classNames("heading-5", "weight-semibold")}>Мои уроки</Filter.Title>
        <Filter.Option className={classNames("body-large")}>Показать:</Filter.Option>
        <Filter.OptionLink>Все Уроки</Filter.OptionLink>
        <Filter.Right>
          <Droprown
            placeholder="Select"
            options={commonOption}
            value={commonDropdown}
            onChange={setCommonDropdown}
            size="medium"
          />
        </Filter.Right>
      </Filter>
      <Body />
    </Container>
  );
};
