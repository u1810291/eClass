import styled, { keyframes } from 'styled-components';
import {
  getType, label, helperText, getBorderRadius
} from '../style';

const transition = keyframes`    
  transition: all 0.2s;
  touch-action: manipulation;
`;

export const Input = styled.input`
  ${getType};
  ${({ error }) => error && error} ::-webkit-input-placeholder {
    color: #535875 !important;
  }
  border-radius: ${getBorderRadius};
  outline: none !important;
  text-indent: 10px;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  border: none !important;
  span{
    display: none !important;
  }
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
`;
export const InnerContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
export const Helper = styled.div`
  ${helperText}
  position: absolute;
`;
