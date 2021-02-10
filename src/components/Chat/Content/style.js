import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: auto;

  background: white;
  grid-area: content;
  position: relative;
  display: grid;
  z-index: 11;
  grid-template-areas: "navbar"
                        "body";
  grid-template-rows: var(--chat-navbar-height);
  grid-template-columns: 1fr;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  grid-area: body;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px black;

`;

export const Messages = styled.div`
display: flex;
position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
InputWrapper.Item = styled.div`
  margin: 5px;
  cursor: pointer;
`;

export const Upload = styled.input`
  margin: 5px;
  cursor: pointer;
`;
