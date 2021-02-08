import styled from 'styled-components';

export const ItemWrapper = styled.div`
  background: ${({ active }) => (active ? '#1E75FF' : '#FFFFFF')};
  cursor: pointer;  
  border-radius: 15px;
  &:hover {
    background: #5697ff;
  }
  padding: 20px;
`;

export const Title = styled.div`

`;

export const Message = styled.div`

`;

export const ImageWrapper = styled.div`

`;
