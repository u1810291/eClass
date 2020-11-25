import styled from "styled-components";
import { buttons } from "../style";

export const Title = styled.span`
  color: white;
  margin-left: ${({ icon }) => (icon ? "15px" : "unset")};
`;

export const Container = styled.button`
  ${buttons};
  background: #f24142;
  cursor: pointer;
  svg {
    path {
      fill: #ffffff !important;
    }
  }
  &:focus {
    outline: none;
  }
  &:not(:disabled):focus {
    background: #d5031e;
  }
  &:not(:disabled):hover svg {
    path {
      fill: white !important;
    }
  }
  &:not(:disabled):hover {
    background: #e86868;
  }
  &:not(:disabled):active {
    background: #d5031e;
  }
  &:disabled {
    background: #f5f5f5;
  }
  &:disabled ${Title} {
    color: #c4c4c4;
  }
  &:disabled svg {
    path {
      fill: #c4c4c4 !important;
    }
  }
`;
