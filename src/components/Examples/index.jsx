import React from "react";
import { Container, ButtonGrid, InputGrid } from "./style";
import { PrimaryButton } from "../Buttons";
import NormalInput from "../Forms/Inputs/Normal";
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
      <InputGrid>
        <NormalInput size="large" />
        <NormalInput size="large" />
        <NormalInput size="large" />
        <NormalInput size="large" />
        <NormalInput size="large" />
      </InputGrid>
    </Container>
  );
};
