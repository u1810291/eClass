import React from 'react';
import moment from 'moment';
import * as devices from '../../../../../constants/devices';
import { useWindowSize } from '../../../../../hooks/use-window-size';
import BottomSheet from '../../../../BottomSheet';

import {
  Container,
  DateRange,
  MobileContainer,
  TabletAndDesktopContainer,
  Line,
  ClockRange,
  DateContainer,
  FromTo,
  Close,
  ButtonContiner
} from './style';
import PrimaryButton from '../../../../Buttons/Primary';

export default ({
  selectionRange,
  isPopoverOpen,
  handleSelect,
  rangeChange,
  setIsPopoverOpen,
  startDate,
  endDate,
  handleOnExpand,
  handleOnClear,
  right,
  showTimePicker = true
}) => {
  const { device } = useWindowSize();
  const content = (
    <Container showTimePicker={showTimePicker}>
      <DateRange
        ranges={[selectionRange]}
        onChange={(e) => rangeChange(e)}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        color="red"
        editableDateInputs={false}
        rangeColors={['#0062ff']}
      />
      {!showTimePicker && (
        <ButtonContiner>
          <PrimaryButton
            size="small"
            type="button"
            title="Clear"
            onClick={handleOnClear}
            style={{
              maxWidth: '71px',
              width: '100%',
              height: '43px',
              borderRadius: '8px',
              fontWeight: '400',
              alignSelf: 'flex-end'
            }}
          />
          <PrimaryButton
            size="small"
            type="button"
            title="Set"
            onClick={handleSelect}
            style={{
              maxWidth: '71px',
              width: '100%',
              height: '43px',
              borderRadius: '8px',
              fontWeight: '400',
              alignSelf: 'flex-end'
            }}
          />
        </ButtonContiner>
      )}
      {showTimePicker && (
        <>
          <Line />
          <ClockRange>
            {device !== devices.MOBILE && (
              <Close onClick={() => setIsPopoverOpen(false)} />
            )}
            <FromTo>
              <FromTo.Title>From</FromTo.Title>
              <DateContainer>
                <DateContainer.Day>
                  {moment(startDate).format('D')}
                </DateContainer.Day>
                <DateContainer.Month>
                  {moment(startDate).format('MMM YYYY')}
                </DateContainer.Month>
              </DateContainer>
            </FromTo>
            <FromTo>
              <FromTo.Title>To</FromTo.Title>
              <DateContainer>
                <DateContainer.Day>
                  {moment(endDate).format('D')}
                </DateContainer.Day>
                <DateContainer.Month>
                  {moment(endDate).format('MMM YYYY')}
                </DateContainer.Month>
              </DateContainer>
            </FromTo>
            <ButtonContiner>
              <PrimaryButton
                size="small"
                type="button"
                title="Clear"
                onClick={handleOnClear}
                style={{
                  maxWidth: '71px',
                  width: '100%',
                  height: '43px',
                  borderRadius: '8px',
                  fontWeight: '400',
                  alignSelf: 'flex-end'
                }}
              />
              <PrimaryButton
                size="small"
                type="button"
                title="Set"
                onClick={handleSelect}
                style={{
                  maxWidth: '71px',
                  width: '100%',
                  height: '43px',
                  borderRadius: '8px',
                  fontWeight: '400'
                }}
              />
            </ButtonContiner>
          </ClockRange>
        </>
      )}
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
      <TabletAndDesktopContainer right={right} open={isPopoverOpen}>
        {content}
      </TabletAndDesktopContainer>
    );
  }
  if (device === devices.DESKTOP) {
    return (
      <TabletAndDesktopContainer right={right} open={isPopoverOpen}>
        {content}
      </TabletAndDesktopContainer>
    );
  }
  return <></>;
};
