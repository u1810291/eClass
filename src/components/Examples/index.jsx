import React from "react";
import { Container, ButtonGrid } from "./style";
import { PrimaryButton } from "../Buttons";
export default () => {
  return (
    <Container>
      <ButtonGrid>
        <PrimaryButton title="Save" color="#FF974A" />
        <PrimaryButton title="Save" color="#FC5A5A" />
        <PrimaryButton title="Save" color="#82C43C" />
        <PrimaryButton title="Save" color="#A461D8" />
        <PrimaryButton title="Save" color="#FF9AD5" />
      </ButtonGrid>
    </Container>
  );
};
