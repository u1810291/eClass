import React from "react";
import { Container, ButtonGrid, InputGrid, InputsGroup } from "./style";
import { PrimaryButton } from "../Buttons";
import { NormalInput, SearchableInput, LinkedlInput } from "../Forms/Inputs";
export default () => {
  return (
    <Container>
      <h1>Buttons</h1>
      <ButtonGrid>
        <PrimaryButton size="small" title="Save" color="#FF974A" />
        <PrimaryButton size="medium" title="Save" color="#FC5A5A" />
        <PrimaryButton size="large" title="Save" color="#82C43C" />
        <PrimaryButton size="large" title="Save" color="#A461D8" />
        <PrimaryButton size="large" title="Save" color="#FF9AD5" />
      </ButtonGrid>
      <InputsGroup>
        <InputGrid>
          <NormalInput white size="large" placeholder="Enter first name" />
          <NormalInput white size="large" placeholder="Enter phone number" />
          <NormalInput white size="large" placeholder="Enter email" />
        </InputGrid>
        <InputGrid>
          <SearchableInput white size="large" placeholder="Enter first name" />
          <SearchableInput white size="large" placeholder="Enter email" />
          <SearchableInput white size="large" placeholder="Enter phone" />
        </InputGrid>
        <InputGrid>
          <LinkedlInput
            white
            size="large"
            placeholder="Linked Input Enter first name"
          />
          <LinkedlInput
            white
            size="large"
            placeholder="Linked Input Enter email first"
          />
          <LinkedlInput
            white
            size="large"
            placeholder="Linked Input Enter phone number"
          />
        </InputGrid>
        <InputGrid>
          <NormalInput white size="large" placeholder="Enter first name" />
          <NormalInput white size="large" placeholder="Enter email" />
          <NormalInput white size="large" placeholder="Enter phone number" />
        </InputGrid>
      </InputsGroup>
    </Container>
  );
};
