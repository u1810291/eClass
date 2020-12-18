import React from "react";
import {
  Container,
  ButtonGrid,
  Item,
  DefaultGrid,
  DropdownExamples,
} from "./style";
import ReactTooltip from "react-tooltip";
import { PrimaryButton } from "../Buttons";
import Inputs from "./Inputs";
import iconSets from "./icons";
import Icon from "../Icon";
import { copyTxt } from "../../utils/computes";
import Dropdowns from "./Dropdowns";
import Typography from "./Typography";
import TextArea from "../Forms/Inputs/TextArea";
import Color from "../Color";
export default () => {
  return (
    <Container>
      <Color />
      <h1>Buttons</h1>
      <ButtonGrid>
        <PrimaryButton size="small" title="Save" color="#FF974A" />
        <PrimaryButton size="medium" title="Save" color="#FC5A5A" />
        <PrimaryButton size="large" title="Save" color="#82C43C" />
        <PrimaryButton size="large" title="Save" color="#A461D8" />
        <PrimaryButton
          icon="classess2"
          size="large"
          title="Save"
          color="#FF9AD5"
        />
      </ButtonGrid>
      <h1>Inputs</h1>
      <Inputs />
      <h1>Inputs with icons</h1>
      <Inputs icon="balance" />
      <h1>Icons</h1>
      <DefaultGrid>
        {iconSets.map((props, index) => (
          <Item
            onClick={() => {
              copyTxt(props.icon);
            }}
            data-tip={props.icon}
            key={`${index + 1}`}
          >
            <Icon {...props} color="#7F88B1" />
          </Item>
        ))}
      </DefaultGrid>
      <ReactTooltip />
      <h1>Single dropdown</h1>
      <DropdownExamples>
        <Dropdowns />
      </DropdownExamples>
      <TextArea placeholder="Textarea..." white />
      <Typography />
    </Container>
  );
};
