import styled from 'styled-components';

export const ItemWrapper = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.active ? '#1E75FF' : '#FFFFFF'
  }
}))`
cursor: pointer;  
  border-radius: 15px;
  &:hover{
    background: #F2F7FF;
  }
  width: 100%;
  padding: 20px;
`;
