import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: var(--navbar-height) 1fr;
`;

export const Content = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
`;
