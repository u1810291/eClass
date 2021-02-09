import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  height: 88%;
  display: grid;
  word-break: break-all;
  grid-template-areas: "sidebar content";
  grid-template-columns: auto 1fr;
  grid-gap: 2px;  
  margin: 40px 20px 40px;
`;
