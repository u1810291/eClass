import styled from 'styled-components';

export const Container = styled.div`
  transition: 0.2s width;
  background: #FFFFFF;
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
  height: 100%;
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
  overflow: auto;
  grid-area: body;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  height: 100%;
  &::-webkit-scrollbar {
    position: absolute;
    width: 8px;
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: rgba(47, 47, 81, 0);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(73, 75, 116, 0);
    border-radius: 8px;
  }
  &:hover::-webkit-scrollbar-track {
    background: rgba(47, 47, 81, 0.5);
  }
  &:hover::-webkit-scrollbar-thumb {
    background: rgba(73, 75, 116, 0.5);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(73, 75, 116, 1);
  }
  border: solid 1px black;
`;
