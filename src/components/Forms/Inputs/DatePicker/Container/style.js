import styled from 'styled-components';
import { DateRangePicker } from 'react-date-range';
import CloseSvg from '../../../../../assets/icons/close.svg';
import { device } from '../../../../../utils/responsive';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ showTimePicker }) => (showTimePicker ? 'row' : 'column')};
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  transition: all 0.5s ease;
  padding: 0px 16px 24px 16px;
`;

export const TabletAndDesktopContainer = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  width: fit-content;
  border-radius: 8px;
  background: #fff;
  padding: 25px;
  right: ${({ right }) => (!right ? '0px' : 'auto')};
  left: ${({ right }) => (right ? '0px' : 'auto')};
  z-index: 30;
  box-shadow: 0px 6px 12px rgba(73, 75, 116, 0.04);
  position: absolute;
  top: 100%;

  @media ${device.mobile} {
    left: 0;
  }
`;

export const DateRange = styled(DateRangePicker)`
  .rdrMonthAndYearWrapper {
    height: unset;
  }
  .rdrDateDisplayWrapper {
    background-color: inherit;
  }

  .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrMonth {
    width: 23em;
  }
  @media ${device.mobile} {
    .rdrCalendarWrapper {
      width: -webkit-fill-available;
    }
    .rdrMonth {
      width: -webkit-fill-available;
    }
  }

  .rdrStartEdge {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .rdrEndEdge {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rdrDayEndOfMonth .rdrInRange,
  .rdrDayEndOfMonth .rdrStartEdge,
  .rdrDayEndOfWeek .rdrInRange,
  .rdrDayEndOfWeek .rdrStartEdge {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rdrDayStartOfMonth .rdrInRange,
  .rdrDayStartOfMonth .rdrEndEdge,
  .rdrDayStartOfWeek .rdrInRange,
  .rdrDayStartOfWeek .rdrEndEdge {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rdrDayHovered {
    border: 0 !important;
    outline: none !important;
  }

  .rdrDayToday .rdrDayNumber span:after {
    content: unset;
  }

  .rdrDay {
    height: 3.6em;
  }

  .rdrInRange {
    background-color: #6ea1f2 !important;
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span {
    color: #181c32;
  }
`;

export const ClockRange = styled.div`
  display: flex;
  padding-left: 250px;
  flex-direction: column;
  background: transparent;
  justify-content: space-around;
  position: relative;
`;

export const FromTo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

DateContainer.Day = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 32px;
  color: #0062ff;
  background-color: transparent;
  padding-right: 4px;
`;

DateContainer.Month = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #181c32;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
`;

FromTo.Title = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 10px;
  text-align: left;
  color: #b5b5c3;
  border: 1px solid rgba(0, 0, 0, 0);
`;

export const Line = styled.div`
  border: 1px solid #ebebf3;
  margin-left: 24px;
  margin-right: 24px;
  @media ${device.mobile} {
    margin-left: unset;
    margin-right: unset;
  }
`;

export const ButtonContiner = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  column-gap: 8px;
`;

export const Selection = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  border-radius: 8px;
  cursor: pointer;
  background: #f8f8f8;
  margin-top: 10px;
  padding-left: 16px;
  width: 206.08px;
  .react-time-picker {
    width: -webkit-fill-available;
  }
  @media ${device.mobile} {
    width: unset;
  }
  .svg {
    margin-left: auto;
  }

  .react-time-picker__wrapper {
    border: none;
    width: 200px;
  }
`;

export const Close = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background: url("${CloseSvg}") no-repeat, center, center;
  cursor: pointer;
  right: 0;
  top: 0;
`;
