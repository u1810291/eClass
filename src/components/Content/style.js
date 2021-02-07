import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: auto;

  background: white;
  padding: 30px;
  margin: 20px;
  margin-right: 200px;
  border-radius: 42px;
  height: 90%;
  width: 94%;
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: var(--navbar-height) 1fr;
`;

export const Content = styled.div`
  position: relative;
  width: 98%;
  height: 98%;
  border-radius: 25px;
  padding: 0 10px;
  margin-right: 20px;

  background: #f4f7fc;
`;
