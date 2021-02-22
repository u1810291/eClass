import React from 'react';
import * as devices from '../../../../constants/devices';
import { useWindowSize } from '../../../../hooks/use-window-size';
import BottomSheet from '../../../BottomSheet';

import {
  Container,
  DateRange,
  MobileContainer,
  TabletAndDesktopContainer
} from './style';

export default ({
  selectionRange,
  isPopoverOpen,
  rangeChange,
  handleOnExpand
}) => {
  const { device } = useWindowSize();
  const content = (
    <Container showTimePicker>
      <DateRange
        ranges={[selectionRange]}
        onChange={(e) => rangeChange(e)}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        color="red"
        editableDateInputs={false}
        rangeColors={['#0062ff']}

      />
    </Container>
  );

  const swipeableWrapper = (
    <BottomSheet
      swipeableProps={{
        open: isPopoverOpen,
        onChange: handleOnExpand,
        style: { zIndex: '10' }
      }}
      handleOnExpand={handleOnExpand}
    >
      <MobileContainer>{content}</MobileContainer>
    </BottomSheet>
  );

  if (device === devices.MOBILE) return swipeableWrapper;
  if (device === devices.TABLET) {
    return (
      <TabletAndDesktopContainer open={isPopoverOpen}>
        {content}
      </TabletAndDesktopContainer>
    );
  }
  if (device === devices.NOTEBOOK) {
    return (
      <TabletAndDesktopContainer open={isPopoverOpen}>
        {content}
      </TabletAndDesktopContainer>
    );
  }
  if (device === devices.DESKTOP) {
    return (
      <TabletAndDesktopContainer open={isPopoverOpen}>
        {content}
      </TabletAndDesktopContainer>
    );
  }
  return <>Hello</>;
};
