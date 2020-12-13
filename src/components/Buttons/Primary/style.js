import styled from "styled-components";
import { buttons } from "../style";

export const Title = styled.span`
  color: white;
  margin-left: ${({ icon }) => (icon ? "15px" : "unset")};
`;

export const Container = styled.button`
  ${buttons};
  background: ${({ color }) => (color ? color : "#0062FF")};
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
    background: #0062ff;
  }
  &:not(:disabled):hover svg {
    path {
      fill: white !important;
    }
  }
  &:not(:disabled):hover {
    background: #297bff;
  }
  &:not(:disabled):active {
    background: #0062ff;
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
