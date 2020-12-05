import React from "react";
import { Container, ButtonGrid, InputGrid, InputsGroup } from "./style";
import { PrimaryButton } from "../Buttons";
import { NormalInput, SearchableInput } from "../Forms/Inputs";
export default () => {
  return (
    <Container>
      <ButtonGrid>
        <PrimaryButton size="large" title="Save" color="#FF974A" />
        <PrimaryButton size="large" title="Save" color="#FC5A5A" />
        <PrimaryButton size="large" title="Save" color="#82C43C" />
        <PrimaryButton size="large" title="Save" color="#A461D8" />
        <PrimaryButton size="large" title="Save" color="#FF9AD5" />
      </ButtonGrid>
      <InputsGroup>
        <InputGrid>
          <NormalInput size="large" placeholder="Enter first name" />
          <NormalInput size="large" placeholder="Enter email" />
          <NormalInput size="large" placeholder="Enter phone number" />
        </InputGrid>
        <InputGrid>
          <SearchableInput size="large" placeholder="Enter first name" />
          <SearchableInput size="large" placeholder="Enter email" />
          <SearchableInput size="large" placeholder="Enter phone number" />
        </InputGrid>
        <InputGrid>
          <NormalInput size="large" placeholder="Enter first name" />
          <NormalInput size="large" placeholder="Enter email" />
          <NormalInput size="large" placeholder="Enter phone number" />
        </InputGrid>
        <InputGrid>
          <SearchableInput size="large" placeholder="Enter first name" />
          <SearchableInput size="large" placeholder="Enter email" />
          <SearchableInput size="large" placeholder="Enter phone number" />
        </InputGrid>
      </InputsGroup>
    </Container>
  );
};
