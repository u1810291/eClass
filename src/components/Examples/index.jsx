import React from "react";
import { Container, ButtonGrid } from "./style";
import { PrimaryButton } from "../Buttons";
export default () => {
  return (
    <Container>
      <ButtonGrid>
        <PrimaryButton title="Save" />
        <PrimaryButton title="Save" />
        <PrimaryButton title="Save" />
        <PrimaryButton title="Save" />
        <PrimaryButton title="Save" />
        <PrimaryButton title="Save" />
      </ButtonGrid>
    </Container>
  );
};
