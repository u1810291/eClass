import styled from "styled-components";
import {device} from "../../utils/responsive";

export const Cotainer = styled.div``;

export const UpperContainer = styled.div`
  border-radius: 32px 32px 0px 0px;
  ::-webkit-scrollbar-track {
    margin-top: 1.5rem;
  }
  .react-swipeable-view-container {
    border-radius: 32px 32px 0px 0px;
    ::-webkit-scrollbar-track {
      margin-top: 1.5rem;
    }
  }
  .ReactSwipeableBottomSheet--closed {
    border-radius: 32px 32px 0px 0px;
    ::-webkit-scrollbar-track {
      margin-top: 1.5rem;
    }
  }
  .ReactSwipeableBottomSheet--open {
    border-radius: 32px 32px 0px 0px;
    ::-webkit-scrollbar-track {
      margin-top: 1.5rem;
    }
    ::-webkit-scrollbar-track {
      margin-top: 1.5rem;
    }
  }
`;

export const TopInnerContainer = styled.div`
  top: 0;
  position: sticky;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
  flex-direction: column;
  row-gap: 24px;
  padding-top: 8px;
  padding-bottom: 24px;
  z-index: 10;
  @media ${device.tablet} { 
    padding-top: 16px;
  }
  
}
`;

export const SwipeButton = styled.div`
  width: 60px;
  height: 6px;
  background-color: #e9e9e9;

  border-radius: 10px;
  align-self: center;
  justify-self: center;

  &:hover {
    background: #b5b3b3;
    cursor: pointer;
  }

  &:active {
    background: #b5b3b3;
  }
`;
