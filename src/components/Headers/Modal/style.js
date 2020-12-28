import styled, {css} from "styled-components";
import CustomCheckbox from "../../CheckBox";

export const DropPlaceholder = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 8px;
  border: dashed 2px #dedee4;
  background-color: white;
`;

export const Container = styled.div`
  padding: 24px;
  box-sizing: border-box;
`;

export const Checkbox = styled(CustomCheckbox)``;

const ItemDragging = css`
  background: white;
  box-shadow: 0px 9px 26px 5px rgba(0, 0, 0, 0.1);
`;

export const Item = styled.div`
  margin-bottom: 12px;
  border-radius: 8px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 43px;
  cursor: pointer;
  ${({dragging}) => dragging && ItemDragging};
  &:hover ${Checkbox}:not(:checked) {
    background: white;
  }
`;

export const Title = styled.span`
  font-size: 12px;
  font-weight: var(--font-semibold);
  color: #181c32;
  margin-left: 14px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
