import styled, { keyframes } from 'styled-components';
import PrimaryButton from '../Buttons/Primary';
import { ReactComponent as IconFilter } from '../../assets/icons/filter.svg';
import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IconLocation } from '../../assets/icons/location.svg';

import { device } from '../../utils/responsive';

export { ReactComponent as GridIcon } from '../../assets/icons/grid.svg';

export const LocationIcon = styled(IconLocation)`
  margin: 0px 3px;
`;

// Buttons, and its icons
export const FilterIcon = styled(IconFilter)`
  margin-right: 8px;
  @media ${device.mobile} {
    margin-right: 0px;
  }
`;
export const PlusIcon = styled(IconPlus)`
  margin-right: 8px;
  @media ${device.mobile} {
    margin-right: 0px;
  }
`;

export const GridButton = styled(PrimaryButton)`
  &:not(:disabled):hover #Path_320,
  &:not(:disabled):hover #Path_321,
  &:not(:disabled):hover #Path_322,
  &:not(:disabled):hover #Path_323 {
    stroke: #e86868;
  }
  &:not(:disabled):focus #Path_320,
  &:not(:disabled):focus #Path_321,
  &:not(:disabled):focus #Path_322,
  &:not(:disabled):focus #Path_323 {
    stroke: #d5031e;
  }
  &:not(:disabled):active #Path_320,
  &:not(:disabled):active #Path_321,
  &:not(:disabled):active #Path_322,
  &:not(:disabled):active #Path_323 {
    stroke: #d5031e;
  }
`;

export const FilterButton = styled(PrimaryButton)`
  &:not(:disabled):hover #Path_260,
  &:not(:disabled):hover #Path_261,
  &:not(:disabled):hover #Path_262 {
    fill: #e86868;
  }
  &:not(:disabled):focus #Path_260,
  &:not(:disabled):focus #Path_261,
  &:not(:disabled):focus #Path_262 {
    fill: #d5031e;
  }
  &:not(:disabled):active #Path_260,
  &:not(:disabled):active #Path_261,
  &:not(:disabled):active #Path_262 {
    fill: #d5031e;
  }
`;

// Containers, and layouts
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: block;
  @media ${device.mobile} {
    padding: 16px;
  }
`;

Header.Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 24px;
`;

Header.Actions1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 24px;
  @media ${device.mobile} {
    justify-content: space-between;
    width: 100%;
    column-gap: unset;
  }
`;

Header.TitleBox = styled.div`
  font-size: 16px;
  font-weight: var(--font-medium);
  color: #181c32;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

Header.SearchBox = styled.div`
  padding-top: 12px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  z-index: 3;
`;

Header.SearchContainer = styled.div`
  width: 100%;
`;

const sildeDown = keyframes`
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: translateY(1);
  }
`;

Header.FilterContainer = styled.div`
  width: 100%;
  display: ${({ open }) => (open ? 'block' : 'none')};
  /* animation: ${sildeDown} 0.4s; */
  z-index: 1;
  transition: all 0.2s;
  transform-origin: top left;
`;

export const ButtonContainer = styled.div`
  opacity: ${({ active, hovered }) => (active || hovered ? '0.6' : '')};
  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
`;

export const TitleWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: auto auto;
  gird-template-rows: auto;
`;
TitleWrapper.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;

`;
TitleWrapper.Clear = styled.span`]
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
  color: #92929D;
`;
export const SwitchButton = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 11px 13px rgba(124, 136, 177, 0.1), inset 4px 0px 0px #A9C6FF;
  border-radius: 11px;
  width: 30%;
  display: flex;
  `;

SwitchButton.Button = styled.button`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border: none;
  width: 100%;
  background: #FFFFFF;
  &:active{
    background: #FFFFFF;
  }
  &:hover{
    background: rgba(214, 236, 255, 0.82);
  }
  &:focus{
    outline: none;

    background: rgba(214, 236, 255, 0.82);
  }
  border-radius: 11px;
`;

export const Navigate = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

Navigate.Cards = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: wrap;
`;

export const InnerCard = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 20%;
`;
