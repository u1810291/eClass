import styled from 'styled-components';

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: none;

    tr {
      background: #FFFFFF;
      border-radius: 11px;
      height: 24px;
      width: 100%;
      :last-child {
        td {
          border-bottom: none;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      :last-child {
        border-right: none;
      }
    }
  }
`;
