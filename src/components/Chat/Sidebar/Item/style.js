import styled from 'styled-components';

export const ItemWrapper = styled.div`
  background: ${({ active }) => (active ? '#1E75FF' : '#FFFFFF')};
  cursor: pointer;  
  border-radius: 15px;
  &:hover {
    background: #F2F7FF;
  }
  padding: 20px;
`;
