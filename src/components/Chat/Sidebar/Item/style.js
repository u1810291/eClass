import styled from 'styled-components';

export const ItemWrapper = styled.div`
  background: ${({ active }) => (active ? '#1E75FF' : '#F2F7FF')};
  cursor: pointer;  
  color: ${({ active }) => (active ? '#FFFFFF' : '#333333')};
  border-radius: 15px;
  &:hover {
    background: #d7e5fd;
    color: #333333;
  }
  padding: 10px;
  display: flex;
  align-items: center;

`;

export const Heading = styled.div`
  display:flex;
  justify-content: space-between;
`;
export const Title = styled.div`
font-style: normal;
font-weight: 300;
font-size: 14.2px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.101429px;
`;
export const Footer = styled.div`

font-style: normal;
font-weight: 300;
font-size: 14.2px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.101429px;
`;
export const Message = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14.2px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.101429px;

mix-blend-mode: normal;
opacity: 0.7;
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  border: solid 1px black;
  padding: 5px;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding:5px;
`;
