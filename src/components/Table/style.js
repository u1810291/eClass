import styled from 'styled-components';

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      background: #FFFFFF;
      box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.06), inset 4px 0px 0px #0067CC;
      border-radius: 11px;
      height: 24px;
      width: 100%;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
