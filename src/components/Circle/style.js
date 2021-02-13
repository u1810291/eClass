import styled from 'styled-components';

export const CircleBody = styled.div`
  height: ${({ size }) => `${size}`};
  width: ${({ size }) => `${size}`};
  background: ${({ active }) => (active ? '#E3E0F9' : 'white')};
  border: 5px solid #E3E0F9;
  &:hover{
    border: 5px solid #D2CDF9;
  }
  border-radius: 50%;
  display:flex;
  justify-content: center;
  align-items: center;
  color: #6759D1;
`;
