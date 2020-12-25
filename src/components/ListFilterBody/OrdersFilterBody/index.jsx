import React, {useState} from "react";
import FilterSelect from "../../Forms/DropdownV3";
import DatePicker from "../../FormElements/Input/DatePicker";
import {FilterBodyContainer, FilterBodyFlex, FilterClearAction, FilterItem} from "../style";
import {defaultOptions} from "../helper";

export default () => {
  const [paymentStatus, setPaymentStatus] = useState(["Options1", "Options2", "Options3", "Date", "Pending"]);
  const [status, setStatus] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [paymentType, setPaymentType] = useState(undefined);

  return (
    <FilterBodyContainer>
      <FilterBodyFlex>
        <FilterItem>
          <FilterSelect
            white
            placeholder="Pending"
            value={status}
            onChange={setStatus}
            options={defaultOptions}
            size="large"
          />
        </FilterItem>
        <FilterItem>
          <FilterSelect
            white
            placeholder="Payment Status"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e)}
            multiple
            options={defaultOptions}
            size="large"
          />
        </FilterItem>
        <FilterItem>
          <DatePicker
            placeholder="Date"
            name="rangeDate"
            value={date}
            change={(value) => setDate(value)}
            showTimePicker={false}
            dateFormat="YYYY-MM-DD"
            date={date}
            white
          />
        </FilterItem>
        <FilterItem>
          <FilterSelect
            white
            placeholder="Payment Type"
            value={paymentType}
            onChange={setPaymentType}
            options={defaultOptions}
            size="large"
          />
        </FilterItem>
        <FilterItem />
        <FilterClearAction>
          Clear filters
          <span>1</span>
        </FilterClearAction>
      </FilterBodyFlex>
    </FilterBodyContainer>
  );
};
