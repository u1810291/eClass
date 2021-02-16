import styled from 'styled-components';

export const Container = styled.div`
`;

export const CardContent = styled.div`
  display: block;
`;

CardContent.Header = styled.div``;

CardContent.Body = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
