import styled from 'styled-components';

export const Container = styled.div.attrs((props) => ({
  style: { backgroundColor: props.color || '#FFFFFF' }
}))`
  border: ${({ bordered }) => (bordered ? '1px solid rgba(174, 179, 205, 0.47)' : 'none')};
  box-sizing: border-box;
  border-radius: ${({ size }) => (size !== 'small' ? '25px' : '20px')};
  padding: 15px;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  overflow: auto;
`;
