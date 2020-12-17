import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.div`
  display: flex;
  width: 100%;
`;

export const InputsContainer = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 15px;
  div:nth-child(2) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;

export const UserDetails = styled.div``;
