import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ color }) => (color || '#ffffff')};
  border: ${({ bordered }) => (bordered ? '1px solid rgba(174, 179, 205, 0.47)' : 'none')};
  box-sizing: border-box;
  border-radius: ${({ size }) => (size !== 'small' ? '25px' : '20px')};
  padding: 20px;
  margin: 20px;
  width: 100%;
`;
