import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1fr, 4);
  padding:30px;
  width: 500px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1px 20px 1px;
`;

Text.Right = styled.span``;

Text.Left = styled.span``;
