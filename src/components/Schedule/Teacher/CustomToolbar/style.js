import styled, { css } from 'styled-components';
import { SingleDropdown as DropdownV2 } from '../../../Forms/DropDown';

import { device } from '../../../../utils/responsive';
import { ReactComponent as ArrowLeft } from '../../../../assets/icons/angle-left.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/icons/angle-right.svg';

export const Dropdown = styled(DropdownV2)``;

export const IconLeft = styled(ArrowLeft)``;
export const IconRight = styled(ArrowRight)``;

export const ToolbarComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-family: Poppins;
  position: relative;
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 10% 46% 35%;
    column-gap: 16px;
    position: relative;
  }
`;

export const Buttons = styled.button`
  background: #ffffff;
  color: #b5b5c3;
  border: 1px solid #ebebf3;
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  width: 28px;
  height: 33px;
  cursor: pointer;
  &:hover {
    background: #ebe8e8;
    outline: none;
    border: 1px solid #ebebf3;
  }
  &:focus {
    outline: none;
  }
  @media ${device.mobile} {
    height: 27px;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
`;

export const LeftButton = styled(Buttons)`
  border-radius: 4px 0px 0px 4px;
`;

export const RightButton = styled(Buttons)`
  border-radius: 0px 4px 4px 0px;
`;

const rightButtonGrops = css`
  padding: 8px 12px;
  width: auto;

  background: white;
  color: ${({ active }) => (active ? '#262626' : '')};
  border: ${({ active }) => (active ? '1px solid #262626' : '')};
  &:hover {
    background: white;
    outline: none;
    color: #262626;
    border: 1px solid #262626;
  }
`;

export const LastLeftButton = styled(LeftButton)`
  ${rightButtonGrops}
`;

export const LastMiddleButton = styled(Buttons)`
  ${rightButtonGrops}
`;

export const LastRightButton = styled(RightButton)`
  ${rightButtonGrops}
`;

export const TodayButton = styled(Buttons)`
  border-radius: 4px;
  padding: 8px 12px;
  max-width: 62px;
  width: 100%;
  color: #b5b5c3;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-self: flex-start;
`;

export const ItemContainerLast = styled.div`
  display: flex;
  @media ${device.mobile} {
    justify-content: flex-end;
  }
`;

export const LeftButtonsContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const ToolBarLabel = styled.span`
  flex-grow: 1;
  padding: 0 10px;
  text-align: center;
  color: #181c32;
`;
