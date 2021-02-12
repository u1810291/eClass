import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  color: ${({ white }) => (white ? '#262626' : '#7E8299')};
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
  width: -webkit-fill-available;
  
`;

export const UpperContainer = styled.div`
  border-radius: 32px 32px 0px 0px;
  .react-swipeable-view-container {
    border-radius: 32px 32px 0px 0px;
  }
  .ReactSwipeableBottomSheet--closed {
    border-radius: 32px 32px 0px 0px;
  }
  .ReactSwipeableBottomSheet--open {
    border-radius: 32px 32px 0px 0px;
  }
`;
