import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px 0px;
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
Text.Right = styled.span`
  max-width: 200px;
  overflow: auto;
`;
export const Body = styled.div`
  display:grid;
  grid-area: "right";
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  position:relative;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  position:absolute;
  bottom: 10px;
  right: 10px;
  paddding: 5px;
`;

export const Left = styled.div`
  display:grid;
  grid-area: "left";
  height: 280px;
`;
