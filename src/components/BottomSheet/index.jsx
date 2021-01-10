import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import {Cotainer, UpperContainer, TopInnerContainer, SwipeButton} from "./style";
export default ({children, handleOnExpand, swipeableProps}) => {
  return (
    <UpperContainer>
      <SwipeableBottomSheet {...swipeableProps}>
        <Cotainer>
          <TopInnerContainer>
            <SwipeButton onClick={handleOnExpand} />
          </TopInnerContainer>
          {children}
        </Cotainer>
      </SwipeableBottomSheet>
    </UpperContainer>
  );
};
