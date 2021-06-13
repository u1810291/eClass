import styled from 'styled-components';

export const Container = styled.div`
  display:grid;
  grid-gap: 20px;
  grid-template-areas: "left right";
`;
export const Students = styled.div`
`;
export const Text = styled.span`
  display: flex;
  margin: 3px;
  justify-content: space-between;
`;
Text.Left = styled.span``;
Text.Right = styled.span``;
export const Body = styled.div`
  display:grid;
  grid-area: "right";
  grid-gap: 20px;
`;
