import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: auto;

  background: white;
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: var(--navbar-height) 1fr;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-conent: space-between;
`;

export const Messages = styled.div`
  margin: 5px;
`;

export const InputWrapper = styled.div`
  
`;
