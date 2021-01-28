import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: -webkit-fill-available;
  border-radius: 11px;
  background: ${({ white }) => (white ? ' #ffffff' : ' #f5f5f5')};
  height: 98px;
  padding: 16px;
  outline: none;
  border: 1px solid rgba(174, 179, 205, 0.58);
  &:focus {
    outline: none;
    border: 1px solid #50b5ff;
    color: #9d9d9d;
  }
  &:not(:disabled):focus {
    color: #9d9d9d;
    background: #fff;
    border: 1px solid #50b5ff;
  }
  &:not(:focus)&:not(:disabled):hover {
    color: #9d9d9d;
    background: ${({ white }) => (white ? '#ffffff' : '#e9e9e9')};
  }
  &:not(:disabled):active {
    color: ${({ white }) => (white ? '#262626' : '#9d9d9d')};
  }
  &:active {
    color: ${({ white }) => (white ? '#262626' : '#9d9d9d')};
  }
  &:disabled {
    color: #c4c4c4;
    background: ${({ white }) => (white ? '#e9e9e9' : '#f5f5f5')};
    cursor: not-allowed;
  }
  &::placeholder {
    color: #9d9d9d;
  }
  min-width: 100%;
`;
