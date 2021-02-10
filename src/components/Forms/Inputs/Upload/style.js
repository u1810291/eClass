import styled from 'styled-components';

export const Container = styled.div``;

export const FileInputCustom = styled.button`
  max-width: 132px;
  width: 100%;
  border-radius: 8px;
  outline: none;
  opacity: 0.4;
  border: 0;
  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
  &:focus {
    opacity: 0.3;
  }
`;

export const InputEement = styled.input`
  display: none;
`;
