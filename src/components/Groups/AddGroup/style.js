import styled from 'styled-components';

export const Container = styled.div``;

export const Body = styled.div`
  display:grid;
  grid-gap:10px;
  grid-template-areas: 
      header
      main
      footer
`;
export const Header = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: header;
`;
export const Main = styled.div`
  display:grid;
  grid-gap: 10px;
  grid-area: main;
  grid-template-columns:1fr 1fr;
  `;
export const Footer = styled.div`
  display:grid;
  grid-gap: 10px;
  grid-area: main;
  grid-template-columns:1fr 1fr 1fr;
`;
