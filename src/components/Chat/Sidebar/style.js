import styled from 'styled-components';

export const Container = styled.div`
  transition: 0.2s width;
  grid-area: sidebar;
  position: relative;
  display: grid;
  z-index: 11;
  grid-template-areas: "header"
                        "body";
  grid-template-rows: var(--navbar-height);
  grid-template-columns: 1fr;
  overflow: hidden;
  border: solid 1px black;
  min-width: var(--chat-sidebar-width);
`;

export const Header = styled.div`
  grid-area: header;
  display: grid;
  place-items: center;
  height: var(--navbar-height);
  box-sizing: border-box;
  border: solid 1px black;
`;

export const Body = styled.div`
  grid-area: body;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border: solid 1px black;
`;
