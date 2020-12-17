import { useState } from "react";

import Dropdown from "../../Forms/Dropdowns";
import { dropdownOptions } from "../../../data/dropdown";

const DropdownExample = () => {
  const [commonDropdown, setCommonDropdown] = useState(undefined);
  const [multipleDropdown, setMultipleDropdown] = useState(undefined);
  const [withSearchDropdown, setWithSearchDropdown] = useState(undefined);
  const [statusDropdown, setStatusDropdown] = useState(undefined);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: 30,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 15 }}>
        <h5>Common dropdown</h5>
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={commonDropdown}
          onChange={setCommonDropdown}
          size="large"
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={commonDropdown}
          onChange={setCommonDropdown}
          size="medium"
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={commonDropdown}
          onChange={setCommonDropdown}
          size="small"
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 15 }}>
        <h5>Multiselectable dropdown</h5>
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={multipleDropdown}
          onChange={setMultipleDropdown}
          size="large"
          multiple
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={multipleDropdown}
          onChange={setMultipleDropdown}
          size="medium"
          multiple
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.commonOptions}
          value={multipleDropdown}
          onChange={setMultipleDropdown}
          size="small"
          multiple
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 15 }}>
        <h5>Searchable dropdown</h5>
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.optionsWithImg}
          value={withSearchDropdown}
          onChange={setWithSearchDropdown}
          size="large"
          searchable
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.optionsWithImg}
          value={withSearchDropdown}
          onChange={setWithSearchDropdown}
          size="medium"
          searchable
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.optionsWithImg}
          value={withSearchDropdown}
          onChange={setWithSearchDropdown}
          size="small"
          searchable
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: 15 }}>
        <h5>Searchable dropdown</h5>
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.statusOptions}
          value={statusDropdown}
          onChange={setStatusDropdown}
          size="large"
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.statusOptions}
          value={statusDropdown}
          onChange={setStatusDropdown}
          size="medium"
        />
        <Dropdown
          label="Label"
          placeholder="Select"
          options={dropdownOptions.statusOptions}
          value={statusDropdown}
          onChange={setStatusDropdown}
          size="small"
        />
      </div>
    </div>
  );
};
export default DropdownExample;
