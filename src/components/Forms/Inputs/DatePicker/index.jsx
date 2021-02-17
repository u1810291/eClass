import React, { useRef, useEffect, useState } from 'react';
import moment from 'moment';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import classNames from 'classnames';
import { InputBlock, DatepickerInput } from '../style';
import { ErrorText } from '../../Error/style';
import CalendarComponent from './Container';
import { ClickOutside } from '../../../../hooks/click-outside';
// import Icon from '../../../Icon';
import { Wrapper } from './style';

export default (props) => {
  const {
    placeholder, value, change, error, showTimePicker, white, dateFormat, right
  } = props;
  const clickRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [displayValue, setdisplayValue] = useState(undefined);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });
  const rangeChange = ({ selection }) => {
    let newStartDate = selection.startDate;
    let newEndDate = selection.endDate;

    if (startTime) {
      const sDateTemp = moment(moment(selection.startDate).format(dateFormat));
      const time1 = moment(startTime, 'HH:mm');
      newStartDate = new Date(
        sDateTemp.set({
          hour: time1.get('hour'),
          minute: time1.get('minute')
        })
      );
    }
    if (endTime) {
      const eDateTemp = moment(moment(selection.endDate).format(dateFormat));
      const time1 = moment(endTime, 'HH:mm');
      newEndDate = new Date(
        eDateTemp.set({
          hour: time1.get('hour'),
          minute: time1.get('minute')
        })
      );
    }
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    change({
      start: newStartDate,
      end: newEndDate
    });
  };

  useEffect(() => {
    if (value) {
      const start1 = new Date(value.start);
      const end1 = new Date(value.end);

      setStartDate(start1);
      setEndDate(end1);
      setStartTime(moment(start1).format('HH:mm'));
      setEndTime(moment(end1).format('HH:mm'));

      setSelectionRange({
        key: 'selection',
        startDate: start1,
        endDate: end1
      });
      setdisplayValue(`${moment(start1).format(dateFormat)}/${moment(end1).format(dateFormat)}`);
    }
  }, [value, dateFormat]);

  const changeStartTime = (time) => {
    const sDateTemp = moment(moment(startDate).format(dateFormat));
    const time1 = moment(time, 'HH:mm');
    const newStartDate = new Date(
      sDateTemp.set({
        hour: time1.get('hour'),
        minute: time1.get('minute')
      })
    );
    change({
      start: newStartDate,
      end: endDate
    });
    setStartDate(newStartDate);
    setStartTime(time);
  };

  const changeEndTime = (time) => {
    const eDateTemp = moment(moment(endDate).format(dateFormat));
    const time1 = moment(time, 'HH:mm');
    const newEndDate = new Date(
      eDateTemp.set({
        hour: time1.get('hour'),
        minute: time1.get('minute')
      })
    );
    change({
      start: startDate,
      end: newEndDate
    });
    setEndDate(newEndDate);
    setEndTime(time);
  };

  const handleSelect = () => {
    setIsPopoverOpen(false);
    change({
      start: startDate,
      end: endDate
    });
  };

  const handleOnClear = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setStartTime(null);
    setEndTime(null);
    setdisplayValue(undefined);
    setSelectionRange({
      key: 'selection',
      startDate: new Date(),
      endDate: new Date()
    });
    change(undefined);
  };

  const handleOnExpand = () => {
    setIsPopoverOpen((prevState) => !prevState);
  };
  const mainBlock = (
    <InputBlock>
      <DatepickerInput
        ref={clickRef}
        onClick={() => setIsPopoverOpen((prevState) => !prevState)}
        white={white}
        className={classNames('body-medium', 'weight-regular')}
      >
        {displayValue || (
          <Wrapper white={white}>
            {placeholder}
            {/* <Icon icon={isPopoverOpen ? 'top' : 'buttom'}
             color={white ? '#262626' : '#7E8299'} /> */}
          </Wrapper>
        )}
      </DatepickerInput>
      {error && <ErrorText>{error}</ErrorText>}
      <ClickOutside
        outClickRef={clickRef}
        outsideClicked={() => {
          setIsPopoverOpen(false);
        }}
      >
        <CalendarComponent
          selectionRange={selectionRange}
          startTime={startTime}
          endTime={endTime}
          isPopoverOpen={isPopoverOpen}
          changeStartTime={changeStartTime}
          changeEndTime={changeEndTime}
          handleSelect={handleSelect}
          rangeChange={rangeChange}
          setIsPopoverOpen={setIsPopoverOpen}
          startDate={startDate}
          endDate={endDate}
          handleOnExpand={handleOnExpand}
          showTimePicker={showTimePicker}
          handleOnClear={handleOnClear}
          right={right}
        />
      </ClickOutside>
    </InputBlock>
  );

  return mainBlock;
};
