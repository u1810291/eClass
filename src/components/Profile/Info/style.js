import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.div``;
export const Description = styled.div`
  color: #636e95;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.5px;
`;
export const ImageWrapper = styled.div`
  margin-right: 10px;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  padding-top: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
Text.Name = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #59748a;
`;
Text.Email = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.5px;

  color: #636e95;

  mix-blend-mode: normal;
  opacity: 0.9;
`;
