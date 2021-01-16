import styled, { css } from 'styled-components';

const filter = css`
  filter: ${({ show }) => show && 'blur(0)'};
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${filter};
`;
