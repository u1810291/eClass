import styled from 'styled-components';

export const Container = styled.div`
margin: 20px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: end;
  justify-content: flex-end;
  column-gap: 16px;
  width: 100%;
  margin-top: 20px;
`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  `;

export const Filter = styled.div`
  display:flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
`;

export const AddButtons = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;
