import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  color: #444;
`;

Header.Item = styled.div`
  color: #97a0c3;
`;
