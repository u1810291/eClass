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
  border-top: solid 2px #f4f7fc;
  height: 100%;
  overflow-y: auto;

`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  display: flex;

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
  display:flex;
  width: 100%;
  justify-content: ${({ owner }) => (owner ? 'flex-end' : 'flex-start')};
  p{background: ${({ owner }) => (owner ? '#F1F1F5' : '#FFFFFF')};}
 
`;
MessageCard.Item = styled.p`
  min-width: 20%;
  max-width: 70%;
  position: relative;
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: normal;
  line-break: auto; 
  hyphens: manual;

  border: solid 1px #e2e2ea;
  border-radius: 15px;
  margin: 5px;
  width:fit-content;
  height:fit-content;
  padding: 15px;
  color: #44444F;

`;

export const MessageDate = styled.span`
  color: #92929D;
  position: absolute; right: 4px; bottom: 2px; 
`;
