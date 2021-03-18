import styled from 'styled-components';

export const Container = styled.div`
`;

export const Body = styled.form`
  padding: 20px;
  display:grid;
  grid-gap:10px;
  grid-template-areas: "header"
                       "body"
                       "main"
                       "footer"
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
  grid-area: footer;
  grid-template-columns:1fr 1fr 1fr;
`;

export const DaysContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(7, 1fr);
`;

export const StudyCard = styled.div`
  display: grid;
  grid-area: body;
`;

export const Item = styled.div``;

Item.Head = styled.div`
  padding: 5px;
  display: flex;
`;
