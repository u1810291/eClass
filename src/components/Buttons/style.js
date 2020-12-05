import { css } from "styled-components";

export const getFontSize = ({ size }) => {
  // switch (size) {
  // case ('large' || 'Large'): return '14px';
  // case ('medium' || 'Medium'): return '13px';
  // case ('small' || 'Small'): return '12px';
  // default: return '13px';
  // }
};

export const getHeight = ({ size }) => {
  switch (size) {
    case "large" || "Large":
      return "46px";
    case "medium" || "Medium":
      return "35px";
    case "small" || "Small":
      return "27px";
    default:
      return "35px";
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

export const getBorderRadius = ({ size }) =>
  `${["small", "Small"].includes(size) ? "4px" : "15px"}`;

export const buttons = css`
  border: none;
  border-radius: ${getBorderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ block }) => block && "100%"};
  padding: ${getPadding};
  height: ${getHeight};
`;

export const fonts = css`
  font-size: ${getFontSize};
`;

export const dropdown = css`
  padding: ${getPadding};
`;
