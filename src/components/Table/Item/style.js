import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.06), inset 4px 0px 0px #ff7985;
  border-radius: 11px;
  height: 75px;
  margin-top: 15px;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const Date = styled.div`
  padding-left: 10px;
`;
export const Time = styled.div``;
export const Image = styled.div`
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
export const Duration = styled.div`
  position: relative;
`;
export const Source = styled.div`
  position: relative;
`;
export const Name = styled.div`
  position: relative;
`;
export const Subject = styled.div`
  position: relative;
`;
export const TeacherData = styled.div`
  position: relative;

  display: flex;
  grid-template-columns: repeat(2, 1fr);
`;
