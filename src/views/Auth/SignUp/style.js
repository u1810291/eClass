import styled from "styled-components";

export const Text = styled.div``;

export const AuthWrapper = styled("div")`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background: white;
`;

AuthWrapper.Left = styled.div`
  width: 768px;
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

AuthWrapper.Right = styled.div`
  flex-grow: 1;
  background: #0080ff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
