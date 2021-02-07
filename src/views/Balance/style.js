import styled from 'styled-components';

export const Continer = styled.div`
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
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`;
