import styled from "styled-components";

export const DropdownExamples = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Container = styled.div`
  background: white;
  padding: 20px;
  margin: 20px;
  border-radius: 42px;
  height: 92%;
  width: 95%;
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
`;
export const ButtonGrid = styled.div`
  padding: 25px;
  background: white;
  display: flex;
  grid-gap: 15px;
  grid-template-rows: 1fr;
`;
export const DefaultGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(30, 1fr);
`;

export const Item = styled.div`
  cursor: pointer;
`;
