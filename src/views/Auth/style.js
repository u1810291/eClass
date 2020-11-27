import styled from "styled-components";

export const Text = styled.div``;
export const ExamplesWrapper = styled.div`
  background: #edeff0;
`;
export const AuthWrapper = styled("div")`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  width: 100%;
`;

AuthWrapper.Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  font-weight: 600;

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 120px 0 80px 0;
  }
`;

export const AuthHeader = styled.div`
  text-align: center;
  color: #181c32;
`;

export const AuthForm = styled.form`
  margin: auto 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
  width: 100%;
  max-width: 400px;
  @media (max-width: 600px) {
    padding: 0 1rem;
    width: calc(100vw - 2rem);
  }
  button {
    margin-bottom: 32px;
  }
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const AuthFooter = styled.div`
  div {
    line-height: 20px;
    text-align: center;
  }
  span {
    text-decoration: underline;
    color: #181c32;
  }
`;

export const ResetPassword = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
