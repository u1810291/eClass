import styled from "styled-components";

export const Container = styled.div`
  background: ${({color}) => (color ? color : "#ffffff")};
  border: 1px solid rgba(174, 179, 205, 0.47);
  box-sizing: border-box;
  border-radius: 25px;
  padding: 20px;
  margin: 20px;
  width: 100%;
`;
