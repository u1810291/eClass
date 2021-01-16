import styled from 'styled-components';

export const DropdownExamples = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  margin: 10px;
`;

export const Container = styled.div``;
export const ButtonGrid = styled.div`
  padding: 25px;
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
