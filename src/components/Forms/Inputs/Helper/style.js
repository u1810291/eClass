import styled, { css, keyframes } from 'styled-components';
import {
  getType, label, helperText, getBorderRadius
} from '../style';

export const HelperWrapper = styled.div`
  position: absolute;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 13px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 13px;
  background: rgb(233, 233, 233);
  cursor: pointer;
  height: 50px;
`;

const transition = keyframes`    
  transition: all 0.2s;
  touch-action: manipulation;
`;

const search = css`
  background-color: white;
  &:focus {
    /* outline: none !important;
    border: none !important; */
  }
`;

export const Input = styled.input`
  ${getType};
  ${({ error }) => error && error} ::-webkit-input-placeholder {
    color: #535875 !important;
  }
  border-radius: ${getBorderRadius};
  outline: none !important;
  text-indent: 30px;

  ${({ search: isSearch }) => isSearch && search} ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  min-width: 100%;
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
  position: relative;
  display: flex;
  align-items: center;
`;
export const Helper = styled.div`
  ${helperText}
`;
