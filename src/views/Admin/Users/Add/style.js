import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px;
`;

export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 20px;
  `;

MainInfo.TextArea = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
`;
MainInfo.Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 20px;
`;
