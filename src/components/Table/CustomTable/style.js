import styled, { css } from 'styled-components';

export const Main = styled.div``;

export const TableContainer = styled.div`
height: ${({ height }) => (`${height}px` || '540px')};
position: relative;
--table-table-width: auto;
--table-left-right-row-paddings: 25px;
--table-cell-right-padding: 36px;
--table-cell-left-padding: 16px;
--table-sort-icon-size: 5px;
--table-row-background-color: transparent;
--table-row-between: 14px;
--table-margin-first-element-sticky: 125px;

overflow:auto;
`;

const paddings = css`
  padding-left: ${({ left }) => left && 'var(--table-left-right-row-paddings)'};
  padding-right: ${({ right }) => right && 'var(--table-left-right-row-paddings)'};
`;

export const Cell = styled.div`
  position: relative;
  display:flex;
  justify-content: ${({ align }) => `flex-${align}`};
  align-items: center;
`;

const upArrowIcon = css`
  width: 0;
  height: 0;
  border-top: 0;
  border-left: var(--table-sort-icon-size) solid transparent;
  border-right: var(--table-sort-icon-size) solid transparent;
  border-bottom: var(--table-sort-icon-size) solid #181c32;
`;

const downArrowIcon = css`
  width: 0;
  height: 0;
  border-bottom: 0;
  border-left: var(--table-sort-icon-size) solid transparent;
  border-right: var(--table-sort-icon-size) solid transparent;
  border-top: var(--table-sort-icon-size) solid
    ${({ df }) => (df ? '#9D9D9D' : '#181C32')};
`;

export const Icon = styled.span`
  position: absolute;
  right: -18px;
  &:before {
    content: "";
    position: absolute;
    right: var(--table-cell-right-padding);
    bottom: -2px;
    ${({ down }) => (!down ? downArrowIcon : upArrowIcon)};
  }
`;

export const THead = styled.thead`
  position: sticky;
  background: none;
  tr{
    background: transparent !important;
  }
`;

export const TR = styled.tr`
  td{
    height: 55px;
  }
  border: solid 1px #000;
  {
    border-right: 2px solid #F5F5F8;
  };
  background: #FFFFFF;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.06), inset 4px 0px 0px #FF7985; 

`;

export const TBody = styled.tbody`
`;

export const TD = styled.td`
  ${paddings}
  max-width: 200px;
  min-width: 50px;

`;

export const MainTableContainer = styled.table`
`;
