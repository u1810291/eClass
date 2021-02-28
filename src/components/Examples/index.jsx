import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import {
  Container, ButtonGrid, Item, DefaultGrid, DropdownExamples
} from './style';
import { PrimaryButton } from '../Buttons';
import Inputs from './Inputs';
import iconSets from './icons';
import Icon from '../Icon';
import { copyTxt } from '../../utils/computes';
import Dropdowns from './Dropdowns';
import Typography from './Typography';
import TextArea from '../Forms/Inputs/TextArea';
import Color from '../Color';
import Switch from '../Forms/Switch';
import DatePicker from '../Forms/Inputs/DatePicker';
import DatePickers from './Inputs/DatePickers';
import { SingleDropdown } from '../Forms/DropDown';

export default () => {
  const [isOn, setIsOn] = useState(false);
  const single = [
    {
      id: 1,
      value: 'Option 1',
      name: 'option1'
    },
    {
      id: 2,
      value: 'Option 2',
      name: 'option2'
    },
    {
      id: 3,
      value: 'Option 3',
      name: 'option3'
    }
  ];
  const [date, setDate] = useState(undefined);
  return (
    <Container>
      <Color />
      <h1>Buttons</h1>
      <ButtonGrid>
        <PrimaryButton size="small" title="Save" color="#FF974A" />
        <PrimaryButton size="medium" title="Save" color="#FC5A5A" />
        <PrimaryButton size="large" title="Save" color="#82C43C" />
        <PrimaryButton size="large" title="Save" color="#A461D8" />
        <PrimaryButton icon="classess2" size="large" title="Save" color="#FF9AD5" />
      </ButtonGrid>
      <h1>Inputs</h1>
      <Inputs />
      <h1>Inputs with icons</h1>
      <Inputs icon="balance" />
      <h1>Icons</h1>
      <DefaultGrid>
        {iconSets.map((props, index) => (
          <Item
            onClick={() => {
              copyTxt(props.icon);
            }}
            data-tip={props.icon}
            key={`${index + 1}`}
          >
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Icon {...props} color="#7F88B1" />
          </Item>
        ))}
      </DefaultGrid>
      <ReactTooltip />
      <h1>Single dropdown</h1>
      <DropdownExamples>
        <Dropdowns />
      </DropdownExamples>
      <h1>Text Area</h1>
      <TextArea placeholder="Textarea..." white />
      <SingleDropdown
        // eslint-disable-next-line no-console
        onSelect={(value) => console.log(value)}
        size="large"
        options={single}
        white
      />
      <div>
        <h4>Date pickers</h4>
        <DatePickers />
      </div>
      <h1>DatePicker</h1>
      <div style={{ width: '200px' }}>

        <DatePicker
          right
          placeholder="Date"
          name="rangeDate"
          value={date}
          change={(value) => setDate(value)}
          showTimePicker
          dateFormat="YYYY-MM-DD"
          date={date}
          white
        />
      </div>
      <h1>Switch</h1>
      <Switch
        isOn={isOn}
        white
        id="test"
        handleToggle={() => setIsOn((prevState) => !prevState)}
      />
      <h1>Typography</h1>
      <Typography />

    </Container>
  );
};
