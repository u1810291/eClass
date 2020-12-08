import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 20px;
  margin: 20px;
  border-radius: 42px;
  height: 90%;
  width: 95%;
`;
export const ButtonGrid = styled.div`
  padding: 25px;
  background: white;
  display: flex;
  grid-gap: 15px;
  grid-template-rows: 1fr;
`;
export const InputGrid = styled.div`
  padding: 25px;
  background: white;
  width: 95%;
  display: grid;
  grid-gap: 15px;
`;

export const InputsGroup = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 95%;
  grid-template-columns: repeat(4, 1fr);
`;
