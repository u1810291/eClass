import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  overflow: auto;
  height: 100%;
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
    height: 75px;
  }
  border: solid 1px #000;

  border-radius: 11px !important;
  background: #FFFFFF;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.06), inset 4px 0px 0px #FF7985; 

`;

export const TBody = styled.tbody`
  tr {
  }
`;
