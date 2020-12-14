import styled, { css } from "styled-components";

export const getIconSize = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "24px";
    case "medium" || "Medium":
      return "18px";
    case "small" || "Small":
      return "12px";
    default:
      return "24px";
  }
};

export const InputContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const getFontSize = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "14px";
    case "medium" || "Medium":
      return "13px";
    case "small" || "Small":
      return "12px";
    default:
      return "13px";
  }
};

export const getLabelPadding = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "25px";
    case "medium" || "Medium":
      return "17px";
    case "small" || "Small":
      return "12px";
    default:
      return "17px";
  }
};

export const getHeight = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "43px";
    case "medium" || "Medium":
      return "33px";
    case "small" || "Small":
      return "27px";
    default:
      return "33px";
  }
};

export const getPadding = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "0 25px";
    case "medium" || "Medium":
      return "0 17px";
    case "small" || "Small":
      return "0 12px";
    default:
      return "0 17px";
  }
};

export const getIconPadding = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "0 16px";
    case "medium" || "Medium":
      return "0 13px";
    case "small" || "Small":
      return "0 9px";
    default:
      return "11px 13px";
  }
};
export const getColor = ({ type }) => {
  switch (type) {
    case "error" || "Error":
      return "#E71923";
    case "success" || "Success":
      return "#00AE59";
    default:
      return "#9D9D9D";
  }
};

export const getBorderRadius = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "12px";
    case "medium" || "Medium":
      return "10px";
    case "small" || "Small":
      return "8px";
    default:
      return "12px";
  }
};

export const inputs = css`
  border: 1px solid #e2e2ea;
  padding: ${getPadding};
  height: ${getHeight};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  width: 100%;
`;

export const fonts = css`
  font-weight: var(--font-normal);
  font-size: ${getFontSize};
`;

export const error = css`
  ${inputs};
  border: 1px solid #f29392;
  color: #e71923;
  box-sizing: border-box;
  &:focus {
    outline: none;
    background: white;
    border: 1px solid #f29392;
  }
  &:not(:focus)&:not(:disabled):hover {
    color: #e71923;
  }
  ::placeholder {
    color: #e5858a;
  }
`;

export const success = css`
  ${inputs};

  box-sizing: border-box;
  background: white;
  border: 1px solid #8edfb2;
  color: #00ae59;
  &:focus {
    border: none;
    color: #00ae59;
    background: white;
    border: 1px solid #8edfb2;
    outline: none;
  }
  &:not(:focus)&:not(:disabled):hover {
    color: #00ae59;
    background: white;
  }
  ::placeholder {
    color: #57e59f;
  }
`;

export const normal = css`
  ${inputs};

  max-height: ${getHeight};
  box-sizing: border-box;
  border: 1px solid #e2e2ea;
  background: ${({ white }) => (white ? "#ffffff" : "#f5f5f5")};
  color: #9d9d9d;
  .left-right {
    display: none;
  }
  &:focus {
    outline: none;
    color: #9d9d9d;
    border: 1px solid #50b5ff;
  }
  &:not(:disabled):focus {
    color: #9d9d9d;
    background: #fff;
    border: 1px solid #50b5ff;
  }
  &:not(:focus)&:not(:disabled):hover {
    color: #9d9d9d;
    background: ${({ white }) => (white ? "#ffffff" : "#e9e9e9")};
  }
  &:not(:disabled):active {
    color: ${({ white }) => (white ? "#262626" : "#9d9d9d")};
  }
  &:active {
    color: ${({ white }) => (white ? "#262626" : "#9d9d9d")};
  }
  &:disabled {
    color: #c4c4c4;
    background: ${({ white }) => (white ? "#e9e9e9" : "#f5f5f5")};
    cursor: not-allowed;
  }
  &::placeholder {
    color: #9d9d9d;
  }
`;

export const getType = ({ type }) => {
  switch (type) {
    case "error" || "Error":
      return error;
    case "success" || "Success":
      return success;
    default:
      return normal;
  }
};

export const getPwd = ({ typePwd }) => {
  switch (typePwd) {
    case "error" || "Error":
      return error;
    case "success" || "Success":
      return success;
    default:
      return normal;
  }
};

export const helperText = css`
  ${fonts}
  color: ${getColor};
  margin-left: ${getLabelPadding};
`;

export const label = css`
  ${fonts}
  color: ${getColor};
  margin-left: ${getLabelPadding};
`;
