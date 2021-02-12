import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { InputBlock } from '../Forms/Inputs/style';
import CalendarComponent from './Container';

export default (props) => {
  const {
    value, change, showTimePicker, dateFormat
  } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
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
      />
    </InputBlock>
  );

  return mainBlock;
};
