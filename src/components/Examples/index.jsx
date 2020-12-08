import React from "react";
import {
  Container,
  ButtonGrid,
  InputGrid,
  InputsGroup,
  Item,
  DefaultGrid,
} from "./style";
import { PrimaryButton } from "../Buttons";
import { NormalInput, SearchableInput, LinkedlInput } from "../Forms/Inputs";
import iconSets from "./icons";
import Icon from "../Icon";
import { copyTxt } from "../../utils/computes";

export default () => {
  return (
    <Container>
      <h1>Buttons</h1>
      <ButtonGrid>
        <PrimaryButton size="small" title="Save" color="#FF974A" />
        <PrimaryButton size="medium" title="Save" color="#FC5A5A" />
        <PrimaryButton size="large" title="Save" color="#82C43C" />
        <PrimaryButton size="large" title="Save" color="#A461D8" />
        <PrimaryButton icon="word" size="large" title="Save" color="#FF9AD5" />
      </ButtonGrid>
      <h1>Inputs</h1>
      <InputsGroup>
        <InputGrid>
          <NormalInput white size="large" placeholder="Enter first name" />
          <NormalInput white size="medium" placeholder="Enter phone number" />
          <NormalInput white size="small" placeholder="Enter email" />
        </InputGrid>
        <InputGrid>
          <SearchableInput white size="large" placeholder="Enter first name" />
          <SearchableInput white size="medium" placeholder="Enter email" />
          <SearchableInput white size="small" placeholder="Enter phone" />
        </InputGrid>
        <InputGrid>
          <LinkedlInput
            white
            size="large"
            placeholder="Linked Input Enter first name"
          />
          <LinkedlInput
            white
            size="medium"
            placeholder="Linked Input Enter email first"
          />
          <LinkedlInput
            white
            size="small"
            placeholder="Linked Input Enter phone number"
          />
        </InputGrid>
        <InputGrid>
          <NormalInput white size="large" placeholder="Enter first name" />
          <NormalInput white size="medium" placeholder="Enter email" />
          <NormalInput white size="small" placeholder="Enter phone number" />
        </InputGrid>
      </InputsGroup>
      <DefaultGrid>
        {iconSets.map((props, index) => (
          <Item
            onClick={() => {
              copyTxt(props.icon);
            }}
            data-tip={props.icon}
            key={`${index + 1}`}
          >
            <Icon {...props} />
          </Item>
        ))}
      </DefaultGrid>
    </Container>
  );
};
