import styled from 'styled-components';
import { buttons } from '../../Buttons/style';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  ${buttons}
  a {
    font-size: 14px !important;
    color: white !important;
    text-decoration: none !important;
  }
  background: ${({ color }) => (color || '#0062FF')};
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
    }
    &:not(:disabled):hover svg {
      path {
        fill: white !important;
      }
    }
    &:not(:disabled):hover {
      opacity: 0.9;
    }
    &:not(:disabled):active {
      opacity: 0.9;
    }
    &:disabled {
      background: #f5f5f5;
    }
    &:disabled svg {
      path {
        fill: #c4c4c4 !important;
      }
    }
`;
