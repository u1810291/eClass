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
  min-width: var(--chat-sidebar-width);
  padding: 2px;
  word-break: break-all;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--navbar-height);
`;

export const Body = styled.div`
  overflow: auto;
  grid-area: body;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  height: 100%;
  width: 100%;
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
`;

export const ItemWrapper = styled.div`
  
`;

export const Counter = styled.div`
  border-radius: 5px;
  background: grey;
  margin: 0 0 0 10px;
  padding: 2px 5px 2px;
  color: white !important;
`;

export const Heading = styled.div`
  display: flex;
  margin: 2px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ color }) => color};
`;
