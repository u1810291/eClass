import styled from 'styled-components';
import { ReactComponent as Subjects } from '../../assets/icons/subjects.svg';

export const Container = styled.div`
  margin: 30px 0px 0px;
`;

export const Icon = styled(Subjects)`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 3px;
  svg{
    margin: 5px;

  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

CardBody.Title = styled.div``;

CardBody.Value = styled.div`
  padding: 10px 0px 0px;
`;

CardBody.CheckBox = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`;

export const Navigate = styled.div`
  display: block;
`;

Navigate.Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InnerCard = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 20%;
  cursor: pointer;
`;

export const CardContent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 40% 60%;
  &:hover{
    opacity: 0.7;
  }
  svg {
    
  path{
    fill: ${({ color }) => (color || '')};
  }
  }
  background-color: inherit !important;

`;
export const MainCard = styled.div`
margin: 10px 0px 0px;
  
  &:hover {    
    transform: translateY(-10px);
  }
  transition-duration: 500ms;
  padding:10px;
`;

export const StepTwo = styled.div``;
export const StepThree = styled.div``;
export const StepFour = styled.div``;

export const PaymentType = styled.ul`
  width: 100%;
  hewight: 100%;

  background: #FFFFFF;
  border: 1px solid #EAEDF7;
  box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.0367952);
  border-radius: 10px;
`;
PaymentType.List = styled.li`
list-style-type: none;
`;

export const Pay = styled.div`
  width: 100%;
  hewight: 100%;

  background: #FFFFFF;
  border: 1px solid #EAEDF7;
  box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.0367952);
  border-radius: 10px;
`;

export const Footer = styled.div`
width: 100%;
hewight: 100%;

  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 4fr;
`;
