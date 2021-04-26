import styled from 'styled-components';

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const LeftWrapper = styled.div``;

export const CircleEvent = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ today }) => (today ? 'white' : '#FFA800')};
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 1fr;
  margin: 10px 0px 0px;
  overflow: hidden;
  `;

export const BigCalendar = styled.div`
  padding: 10px 0px 0px;
  height: 500px;
  overflow: auto;  
  .custom-event {
    display: flex;
    margin: 8px;
    gap: 8px;
  }

  /* height: var(--content-body-height); */
  .rbc-event-label {
    display: none;
  }

  .rbc-addons-dnd.rbc-addons-dnd-is-dragging .rbc-event {
    opacity: 0.5;
  }

  .rbc-toolbar button:active,
  .rbc-toolbar button.rbc-active {
    background: #f24142;
    color: #301e1e;
    outline: none;
    border: 1px solid #ebebf3;
  }

  .rbc-today {
    background-color: #ffe5e8;
  }

  .rbc-toolbar button {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #b5b5c3;
    border: 0px solid #ebebf3;
  }
  .rbc-header + .rbc-header {
    border-left: 0px solid #ebebf3;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rbc-label rbc-time-header-gutter {
    background: white;
  }
  .rbc-time-view .rbc-row {
    min-height: unset !important;
  }
  .rbc-time-view {
  }

  .rbc-time-header-content {
    row-gap: 5px;
  }
  .rbc-label {
    background: white;
    margin-right: 5px;
    border-radius: 4px;
  }
  .rbc-time-content > .rbc-time-gutter {
    background: white;
    border-radius: 4px;
  }
  .rbc-time-content .rbc-today {
    background: #fff2f3 !important;
  }
  .rbc-timeslot-group {
    min-height: 60px;
    display: flex;
    flex-flow: column nowrap;
  }
  .rbc-timeslot-group .rbc-time-slot .rbc-label {
    border-bottom: 1px solid #ebebf3;
    display: flex;
    width: 100%;
    padding: 0px;
    align-items: center;
    justify-content: center;
    position: relative;
    border-top: 1px solid #ebebf3;
    height: 31px;
  }
  .rbc-day-slot .rbc-time-slot {
    border-top: 1px solid #ebebf3;
  }
  .rbc-time-content > * + * > * {
    border-left: 1px solid #ebebf3 !important;
  }
  .rbc-timeslot-group {
    border-bottom: 0px solid #ebebf3 !important;
  }
  .rbc-time-content > .rbc-day-slot {
    background: white;
  }
  .rbc-row {
    column-gap: 5px;
  }
  .rbc-header {
    border-left: 0px solid #ebebf3;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rbc-day-bg + .rbc-day-bg {
    border-left: 0px solid #ebebf3;
  }

  .rbc-month-row + .rbc-month-row {
    border-top: 0px solid #ebebf3;
  }
  .rbc-off-range-bg {
    background: white !important;
    border-radius: 4px;
  }
  .rbc-day-bg {
    background: white !important;
    border-radius: 4px;
  }
  .rbc-row-bg {
    column-gap: 5px;
  }
  .rbc-date-cell {
    padding-top: 6px;
    padding-right: 16px;
  }
  .rbc-time-view {
    border: 0px solid #ddd;
    row-gap: 5px;
    // .rbc-allday-cell {
    //   .rbc-row-bg {
    //     column-gap: unset !important;
    //     .rbc-day-bg {
    //       border-radius: 0px;
    //       border-left: 1px solid #ebebf3;
    //     }
    //   }
    // }
  }
  .rbc-time-header.rbc-overflowing {
    border: 0px solid #ddd;
  }
  .rbc-time-content {
    border-top: 0px solid #ddd;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .rbc-time-header-content {
    border-left: 0px solid #ddd;
  }
  .rbc-month-view {
    border: 0px solid #ebebf3;
    border-radius: 4px;
    column-gap: 5px;
    row-gap: 5px;
  }

  .rbc-month-header {
    display: flex;
    flex-direction: row;
    column-gap: 5px;
  }

  .rbc-header {
    border-bottom: 0px solid #ebebf3;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #b5b5c3;
    background: #ffffff;
    border-radius: 4px;
  }

  .rbc-header + .rbc-header {
    border-left: 0px solid #ebebf3;
  }

  .rbc-day-slot .rbc-event,
  .rbc-event {
    border-radius: 8px;
    background: #fff;
    border: 0px solid #ebebf3 !important;
    box-shadow: 0 6px 12px rgba(73, 75, 116, 0.16);
    /* padding: 7px 12px 7px 12px; */
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #181c32;
  }

  .rbc-label {
    font-size: 12px;
    font-weight: 500;
  }

  .rbc-current-time-indicator {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  padding: 24px 24px 24px 24px;
  background: #fff;

  .rbc-addons-dnd,
  .rbc-calendar {
    transition: transform 5s;
  }

  .rbc-toolbar button:active,
  .rbc-toolbar button.rbc-active {
    background: #3333;
    color: white;
    outline: none;
    border: none;
  }

  .rbc-now {
    font-weight: normal;
    border-radius: 50%;
    background-color: #f24142;
    a {
      color: #fff;
    }
  }
  .rbc-off-range-bg {
    background: #fff;
  }
  .rbc-toolbar button {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #b5b5c3;
    border: none;
  }

  .rbc-day-bg + .rbc-day-bg {
    border-left: none;
  }

  .rbc-month-row + .rbc-month-row {
    border-top: none;
  }

  .rbc-month-view {
    border: none;
  }

  .rbc-header {
    border-bottom: none;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #b5b5c3;
  }

  .rbc-header + .rbc-header {
    border-left: none;
  }

  .rbc-date-cell {
    padding: 5%;
  }
  .rbc-today {
    background: #fff;
  }

  .rbc-current-time-indicator {
    display: none;
  }
  .rbc-time-header,
  .rbc-overflowing,
  .rbc-time-gutter,
  .rbc-time-column,
  .rbc-time-content,
  .rbc-time-view,
  .rbc-timeslot-group {
    border: none;
  }

  .rbc-event {
    display: none;
  }
  .rbc-day-slot .rbc-event,
  .rbc-event {
    padding-top: 4px;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #ebebf3 !important;
    box-shadow: 0 6px 12px rgba(73, 75, 116, 0.16);
    /* padding: 7px 12px 7px 12px; */
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #181c32;
  }

  .rbc-label {
    font-size: 12px;
    font-weight: 500;
  }
  overflow: auto;  
  `;
export const SmallCalendar = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
`;

export const Tag = styled.div`
  display: block;
`;
Tag.Header = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 7px;
`;
Tag.Body = styled.div``;
Tag.Item = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 7px;
`;
Tag.Block = styled.div`
  height: 20px;
  width: 40px;
  background: ${({ color }) => color};
  border-radius: 4px;
`;
Tag.Text = styled.div``;
