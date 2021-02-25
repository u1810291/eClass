import styled from 'styled-components';

export const SubmitForm = styled.form``;

export const Body = styled.div`
  padding-top: 25px;
`;

export const Container = styled.div`
`;

export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 20px;
  
  `;

export const TextAreaContainer = styled.div`
  width: 100% !important;
  padding-top: 20px;
  padding-bottom: 20px;

`;

MainInfo.Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 20px;
`;

MainInfo.Phone = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 20px;
`;
