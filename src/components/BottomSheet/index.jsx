/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import {
  Cotainer, UpperContainer, TopInnerContainer, SwipeButton
} from './style';

export default ({ children, handleOnExpand, swipeableProps }) => (
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
