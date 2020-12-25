import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 12px;
  background: ${({ status }) => (status === 1 ? '#D2FFED' : '#FFF4DE')};
  color: ${({ status }) => (status === 1 ? '#1BC585' : '#FFA800')};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 270px;
  left: -75px;
  border-radius: 8px;
  position: absolute;
  background: white;
  z-index: 1;
`;

export const Body = styled.div`
  position: relative;
  padding: 25px;
`;

export const Header = styled.div`
  height: 55px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #EBEBF3;
`;
