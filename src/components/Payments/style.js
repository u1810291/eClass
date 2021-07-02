import styled from 'styled-components';
import { ReactComponent as Subjects } from '../../assets/icons/subjects.svg';
import { ReactComponent as Cash } from '../../assets/icons/cash.svg';
import { ReactComponent as Online } from '../../assets/icons/online.svg';
import { ReactComponent as Click } from '../../assets/icons/click.svg';
import { ReactComponent as Payme } from '../../assets/icons/payme.svg';

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

export const CashIcon = styled(Cash)`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 3px;
  svg{
    margin: 5px;
  }
`;

export const PaymeIcon = styled(Payme)`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 3px;
  svg{
    margin: 5px;
  }
`;

export const OnlineIcon = styled(Online)`
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 3px;
  svg{
    margin: 5px;
  }
`;

export const ClickIcon = styled(Click)`
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

CardBody.Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
  grid-auto-columns: 250px;
  cursor: pointer;
`;

export const CardContent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 40% 60%;
  width: 200px;
  &:hover {
    opacity: 0.7;
  }
  svg {
    path {
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
  height: 100%;
  background: #FFFFFF;
  border: 1px solid #EAEDF7;
  box-shadow: 0px 2px 4px rgba(28, 41, 90, 0.0367952);
  border-radius: 10px;
`;

PaymentType.Title = styled.div`
  margin: 3px 10px 0px;
  height: 30px;
  display:flex;
  align-items: center;
`;

PaymentType.List = styled.li`
  display:flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  height: 60px !important;
  border-bottom: 1px solid #d8d8d8;
  list-style-type: none;
  margin: 5px 0px 0px; 
  &:nth-child(5) {
    border-bottom: none;
  }
`;

PaymentType.Icon = styled.div`
  background: url(${({ icon }) => icon});
  width: 30px;
  height: 30px;
`;

PaymentType.Text = styled.span`
  padding: 2px 10px 0px;
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
