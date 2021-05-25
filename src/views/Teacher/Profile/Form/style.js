import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Forms = styled.div`
  display: flex;
  width: 100%;
  height: 415px;
`;

export const InputsContainer = styled.div`
  padding-top: 15px;
`;

InputsContainer.Head = styled.div`
  display: flex;
`;

InputsContainer.Body = styled.div`
  padding-top: 15px;
  margin-bottom: 5px;
  display: grid;
  min-width:100%;
`;

InputsContainer.Footer = styled.div`
  div {
    padding-top: 5px;
  }
`;
