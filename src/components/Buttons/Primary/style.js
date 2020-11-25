import styled from "styled-components";
import { buttons } from "../style";

export const Title = styled.span`
  color: white;
  margin-left: ${({ icon }) => (icon ? "15px" : "unset")};
`;

export const Container = styled.button`
  ${buttons};
  background: #6e00ff;
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
    background: #5c00d6;
  }
  &:not(:disabled):hover svg {
    path {
      fill: white !important;
    }
  }
  &:not(:disabled):hover {
    background: #5c00d6;
  }
  &:not(:disabled):active {
    background: #5c00d6;
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
