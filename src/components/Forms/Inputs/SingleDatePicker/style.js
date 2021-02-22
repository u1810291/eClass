import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CustomInput = styled.button`
  height: 48px;
  width: 100%;
  padding: 12px 16px;
  color: ${({ white }) => (white ? '#262626' : ' #9d9d9d')};
  border-radius: 8px;
  outline: none;
  background-color: #ffffff;
  text-align: start;
  &:hover {
    cursor: pointer;
  }

  box-sizing: border-box;
  border: 1px solid #e2e2ea;
  background: ${({ white }) => (white ? '#ffffff' : '#F0F8FF')};
  color: #9d9d9d;
  .left-right {
    display: none;
  }
`;

export const Container = styled.div`

  .react-datepicker {
    box-shadow: 0px 6px 12px rgb(73 75 116 / 4%);
    background-color: #fff;
    color: #000;
    border: 0;
    border-radius: 8px;
    padding: 25px;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__navigation--next {
    border-left-color: #262626;
    outline: none;
  }
  .react-datepicker__navigation--previous {
    border-right-color: #262626;
    outline: none;
  }
  .react-datepicker__navigation {
    top: 37px;
  }
  .react-datepicker__day--selected {
    border-radius: 4px;
    background-color: #0062ff;
    color: #fff;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 4px;
    background-color: #0062ff;
    color: #fff;
  }
  .react-datepicker__header {
    background-color: #ffffff;
    border: 0;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const DatePickerContainer = styled(DatePicker)`
  .react-datepicker {
    box-shadow: 0px 6px 12px rgb(73 75 116 / 4%);
    background-color: #fff;
    color: #000;
    border: 0;
    border-radius: 8px;
    padding: 25px;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__navigation--next {
    border-left-color: #262626;
  }
  .react-datepicker__navigation {
    top: 37px;
  }
  .react-datepicker__day--selected {
    border-radius: 4px;
    background-color: #f24142;
    color: #fff;
  }
  .react-datepicker__header {
    background-color: #ffffff;
    border: 0;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
`;
