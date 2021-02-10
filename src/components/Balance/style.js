import styled from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

Header.Right = styled.div`
`;
Header.Left = styled.div`
`;
export const Body = styled.div`
  width: 100%;
  overflow: auto;
  `;

export const CardsContainer = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`;

export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 124.7%;
`;

export const TotalBalance = styled.div`
font-style: normal;
font-weight: normal;
font-size: 15.5335px;
line-height: 19px;
color: #5A5A5A;
`;

TotalBalance.Bold = styled.div`
font-style: normal;
font-weight: 600;
font-size: 27.7385px;
line-height: 33px;
color: #5A5A5A;
`;

export const DateContainer = styled.div`
font-style: normal;
font-weight: 600;
font-size: 15.5335px;
line-height: 19px;
display: flex;
flex-direction: column;
`;
DateContainer.Text = styled.div`
  
`;
