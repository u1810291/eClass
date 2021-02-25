import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  .react-date-picker {
    width:100%;
    background: white;
    border-radius: 8px;
    border: solid 1px #e2e2ea;
    .react-date-picker__wrapper{
      border:none;
      .react-date-picker__inputGroup{
        display:flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
