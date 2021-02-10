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
  display: grid;
  grid-area: body;
  grid-template-rows: 8fr 1fr;
  border: solid 1px black;
  height: 100%;
  overflow-y: auto;

`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 70%;
  min-width: 20%;

  word-break: break-all;
  overflow-y: auto;
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

export const MessageCard = styled.div`
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: normal;
  line-break: auto; 
  hyphens: manual;

  
  border: solid 1px #e2e2ea;
  border-radius: 20px;
  margin: 5px;
  width:fit-content;
  height:fit-content;
  padding: 10px;
`;
