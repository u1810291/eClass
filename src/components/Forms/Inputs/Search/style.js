import styled, { css } from "styled-components";
import { getType, label, helperText, getBorderRadius } from "../style";

const search = css`
  background-color: white;
  &:focus {
    /* outline: none !important;
    border: none !important; */
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  padding: 2.5%;
`;

export const Input = styled.input`
  ${getType};
  text-indent: 10px;
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

export const Label = styled.div`
  ${label}
  color: #262626;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;
export const Helper = styled.div`
  ${helperText}
`;
