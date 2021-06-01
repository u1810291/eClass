import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import * as devices from '../../../../constants/devices';
import { useWindowSize } from '../../../../hooks/use-window-size';
import DropDown from './DropdownV2';
import {
  ToolbarComponent,
  ItemContainer,
  ToolBarLabel,
  LeftButton,
  RightButton,
  IconLeft,
  IconRight,
  TodayButton,
  ArrowContainer,
  LeftButtonsContainer,
  LastLeftButton,
  LastMiddleButton,
  LastRightButton,
  ItemContainerLast
} from './style';

const viewOptions = [
  {
    id: 0,
    value: 'Month'
  },
  {
    id: 1,
    value: 'Today'
  },
  {
    id: 2,
    value: 'Week'
  },
  {
    id: 3,
    value: 'Day'
  }
];

export default ({
  onView, onNavigate, label
}) => {
  const [activeView, setActiveView] = useState('month');
  const [valueView, setValueView] = useState(undefined);
  const { device } = useWindowSize();

  useEffect(() => {
    if (typeof valueView !== 'undefined') {
      if (viewOptions[valueView].value === 'Today') {
        onNavigate('TODAY');
      } else {
        onView(viewOptions[valueView].value.toLowerCase());
      }
    }
  }, [valueView, onNavigate, onView]);

  const handleOnClick = (active) => {
    onView(active);
    setActiveView(active);
  };
  const todayButton = device !== devices.MOBILE && (
    <TodayButton
      onClick={() => onNavigate('TODAY')}
      className={classNames('caption', 'weight-medium')}
    >
      Today
    </TodayButton>
  );

  const viewButtons = device === devices.MOBILE ? (
    <DropDown
      placeholder="Month"
      options={viewOptions}
      value={valueView}
      onChange={setValueView}
      size="small"
    />
  ) : (
    <>
      <LastLeftButton
        type="button"
        active={activeView === 'month'}
        onClick={() => handleOnClick('month')}
        className={classNames('caption', 'weight-medium')}
      >
        Month
      </LastLeftButton>
      <LastMiddleButton
        type="button"
        active={activeView === 'week'}
        onClick={() => handleOnClick('week')}
        className={classNames('caption', 'weight-medium')}
      >
        Week
      </LastMiddleButton>
      <LastRightButton
        type="button"
        active={activeView === 'day'}
        onClick={() => handleOnClick('day')}
        className={classNames('caption', 'weight-medium')}
      >
        Day
      </LastRightButton>
    </>
  );

  return (
    <ToolbarComponent>
      <LeftButtonsContainer>
        <ArrowContainer>
          <LeftButton onClick={() => onNavigate('PREV')}>
            <IconLeft />
          </LeftButton>
          <RightButton onClick={() => onNavigate('NEXT')}>
            <IconRight />
          </RightButton>
        </ArrowContainer>
        {todayButton}
      </LeftButtonsContainer>
      <ItemContainer>
        <ToolBarLabel className={classNames('body-large', 'weight-medium')}>
          {label}
        </ToolBarLabel>
      </ItemContainer>
      <ItemContainerLast>{viewButtons}</ItemContainerLast>
    </ToolbarComponent>
  );
};
