import styled from 'styled-components';
import gif from '../../assets/gifs/message.png';

export const Animated = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

Animated.Header = styled.div`
  padding: 10px 0px 10px;
`;

Animated.Body = styled.img.attrs({
  src: `${gif}`
})`
  opacity: 0.7;
  width: 70px;
  height: 70px;
`;

export const Text = styled.div`
  padding: 10px;
  font-size: 44px;
  line-height: 53px;
  color: #44444f;
  font-weight: bold;
  font-style: normal;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(190deg, rgba(255, 255, 255, 0.87), #333366);
    border-bottom-right-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    right: 10;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(10deg, rgba(255, 255, 255, 0.87), #333366);
    border-top-left-radius: 50%;
  }
`;
Container.Center = styled.div`
  width: 450px;
  height: 500px;
  display: flex;
  border-radius: 10px;
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  padding: 80px;
  opacity: 0.8;
  z-index: 2;
  @media (max-width: 960px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    padding: 120px 0 80px 0;
  }
`;
export const AuthWrapper = styled('div')`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  background: white;
`;

AuthWrapper.Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  padding: 80px;
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
  top: 0px;
  position: relative;
`;

export const AuthForm = styled.form`
  margin: auto 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 70px auto;
  grid-gap: 30px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: #92929d;
  position: relative;
`;
TextCenter.Left = styled.div`
  left: 0px;
  position: relative;
`;
TextCenter.Right = styled.div`
  padding-left:20px;
  position: relative;
  color: #50b5ff;
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

export const FooterText = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 25px;
`;

export const Privacy = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;

  color: #92929d;
`;

export const CustomLink = styled.span`
  color: #0062ff;
  cursor: pointer;
`;
export const SignUp = styled.div`
  color: #0062ff;
  padding: 0px 5px 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
  text-decoration: underline;
`;
