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
  &:hover {    
    transform: translateY(-10px);
  }
  transition-duration: 500ms;
  padding:10px;
`;

export const StepTwo = styled.div``;
export const StepThree = styled.div``;
export const StepFour = styled.div``;
