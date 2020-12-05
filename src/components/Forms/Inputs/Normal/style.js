import styled, { css, keyframes } from "styled-components";
import { getType, label, helperText, getBorderRadius } from "../style";

const search = css`
  background-color: white;
  &:focus {
    /* outline: none !important;
    border: none !important; */
  }
`;

export const Input = styled.input`
  ${getType};
  border-radius: ${getBorderRadius};
  outline: none !important;

  ${({ search: isSearch }) => isSearch && search} ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.span`
  ${label}
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
  color: #262626;
`;

export const Container = styled.div`
  width: 100%;
`;
export const Helper = styled.div`
  ${helperText}
`;
