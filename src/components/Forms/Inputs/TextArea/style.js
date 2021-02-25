import styled, { keyframes } from 'styled-components';

import {
  label, helperText
} from '../style';

export const TextArea = styled.textarea`
  border: 1px solid ${({ type }) => (type === 'error' ? '#f29392' : '#e2e2ea')} !important;
  line-height: 18px;
  width: 100%;
  text-indent: 20px;
  border-radius: 11px;
  ${({ error }) => error && error} ::-webkit-input-placeholder {
    color: #535875 !important;
  }
  background: ${({ white }) => (white ? ' #ffffff' : ' #f5f5f5')};
  height: 98px;
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

const transition = keyframes`    
  transition: all 0.2s;
  touch-action: manipulation;
`;

export const Label = styled.label`
  ${label}
  animation: ${transition} all 0.2s;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
  color: #262626;
`;

export const Container = styled.div`
  width: 100%;
`;
export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;
export const Helper = styled.div`
  ${helperText}
  position: absolute;
`;
