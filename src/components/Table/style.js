import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
height: ${({ height }) => (height || '540px')};

overflow:auto;
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

export const Container = styled.div`
  padding: 0 1rem 0;
  overflow:auto;
  height: ${({ height }) => (`${parseInt(height, 10) + 60}px` || '600px')};

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    tr {
      border-radius: 11px !important;
      border: solid 1px #000;
      height: 24px;
      width: 100%;
      :last-child {
        td {
        }
      }
    }
    th,
    td {
      text-align: left;
      margin: 0;
      padding: 0.5rem;
      :last-child {
      }
    }
  }
`;

export const THead = styled.thead`
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

  border-radius: 11px !important;
  background: #FFFFFF;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.06), inset 4px 0px 0px #FF7985; 

`;

export const TBody = styled.tbody`
`;

export const TD = styled.td`
  max-width: 200px;
  min-width: 50px;
`;

export const MainTableContainer = styled.table`

`;
