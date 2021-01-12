import React from "react";
import TimePicker from "react-time-picker";
import moment from "moment";
import * as devices from "../../../../../constants/devices";
import {useWindowSize} from "../../../../../hooks/use-window-size";
import BottomSheet from "../../../../BottomSheet";

import {
  Container,
  DateRange,
  MobileContainer,
  TabletAndDesktopContainer,
  Line,
  ClockRange,
  DateContainer,
  Selection,
  FromTo,
  Close,
  ButtonContiner,
} from "./style";
import PrimaryButton from "../../../../Buttons/Primary";

export default ({
  selectionRange,
  endTime,
  startTime,
  isPopoverOpen,
  changeStartTime,
  changeEndTime,
  handleSelect,
  rangeChange,
  setIsPopoverOpen,
  startDate,
  endDate,
  handleOnExpand,
  handleOnClear,
  showTimePicker = true,
}) => {
  const {device} = useWindowSize();
  const content = (
    <Container showTimePicker={showTimePicker}>
      <DateRange
        ranges={[selectionRange]}
        onChange={(e) => rangeChange(e)}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        color="red"
        editableDateInputs={false}
        rangeColors={["#F64E60"]}
      />
      {!showTimePicker && (
        <ButtonContiner>
          <PrimaryButton
            size="small"
            type="button"
            title="Clear"
            onClick={handleOnClear}
            style={{
              maxWidth: "71px",
              width: "100%",
              height: "43px",
              borderRadius: "8px",
              fontWeight: "400",
              alignSelf: "flex-end",
            }}
          />
          <PrimaryButton
            size="small"
            type="button"
            title="Set"
            onClick={handleSelect}
            style={{
              maxWidth: "71px",
              width: "100%",
              height: "43px",
              borderRadius: "8px",
              fontWeight: "400",
              alignSelf: "flex-end",
            }}
          />
        </ButtonContiner>
      )}
      {showTimePicker && (
        <>
          <Line />
          <ClockRange>
            {device !== devices.MOBILE && <Close onClick={() => setIsPopoverOpen(false)} />}
            <FromTo>
              <FromTo.Title>From</FromTo.Title>
              <DateContainer>
                <DateContainer.Day>{moment(startDate).format("D")}</DateContainer.Day>
                <DateContainer.Month>{moment(startDate).format("MMM YYYY")}</DateContainer.Month>
              </DateContainer>
              <Selection>
                <TimePicker
                  autoFocus={false}
                  disableClock
                  amPmAriaLabel="AM / PM"
                  clockIcon={null}
                  onChange={(time) => changeStartTime(time)}
                  value={startTime}
                />
              </Selection>
            </FromTo>
            <FromTo>
              <FromTo.Title>To</FromTo.Title>
              <DateContainer>
                <DateContainer.Day>{moment(endDate).format("D")}</DateContainer.Day>
                <DateContainer.Month>{moment(endDate).format("MMM YYYY")}</DateContainer.Month>
              </DateContainer>
              <Selection>
                <TimePicker
                  amPmAriaLabel="AM / PM"
                  clockIcon={null}
                  disableClock
                  onChange={(time) => changeEndTime(time)}
                  value={endTime}
                />
              </Selection>
            </FromTo>
            <ButtonContiner>
              <PrimaryButton
                size="small"
                type="button"
                title="Clear"
                onClick={handleOnClear}
                style={{
                  maxWidth: "71px",
                  width: "100%",
                  height: "43px",
                  borderRadius: "8px",
                  fontWeight: "400",
                  alignSelf: "flex-end",
                }}
              />
              <PrimaryButton
                size="small"
                type="button"
                title="Set"
                onClick={handleSelect}
                style={{
                  maxWidth: "71px",
                  width: "100%",
                  height: "43px",
                  borderRadius: "8px",
                  fontWeight: "400",
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
        style: {zIndex: "10"},
      }}
      handleOnExpand={handleOnExpand}
    >
      <MobileContainer>{content}</MobileContainer>
    </BottomSheet>
  );

  if (device === devices.MOBILE) return swipeableWrapper;
  if (device === devices.TABLET) {
    return <TabletAndDesktopContainer open={isPopoverOpen}>{content}</TabletAndDesktopContainer>;
  }
  if (device === devices.DESKTOP) {
    return <TabletAndDesktopContainer open={isPopoverOpen}>{content}</TabletAndDesktopContainer>;
  }
};
