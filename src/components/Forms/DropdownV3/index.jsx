/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useRef, useState, useCallback
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  IconWrapper,
  InnerLabel,
  InputWrapper,
  Options,
  OptionsItem,
  OptionsItemImg,
  OptionsWrap,
  SearchInput,
  Select,
  SelectContainer,
  SelectedValue,
  SelectLabel,
  NoOptionsText,
  ItemWrapper,
  ValueText,
  OptionTextWrapper
} from './style';
import { PureCheckbox as Checkbox } from '../../CheckBox';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import Icon from '../../Icon';

const FilterSelect = ({
  value,
  onChange,
  label,
  multiple,
  searchable,
  searchValue,
  setSearchValue,
  options,
  placeholder,
  size,
  icon,
  key,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(undefined);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const selectRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [end, setEnd] = useState(false);
  const [windowH] = useState(window.innerHeight);
  const [windowW] = useState(window.innerWidth);

  const handleResize = (e) => {
    setWidth(e);
  };
  useEffect(() => {
    if (value) {
      let displayValue = null;
      let $selected = { ...setSelected };
      if (Array.isArray(value) && value.length > 0) {
        for (let i = 0; i < value.length; i += 1) {
          $selected[value[i]] = options.find((item) => item.value === value[i]);
        }

        if (options && value.length !== options.length) {
          displayValue = `${value.length}`;
        } else {
          displayValue = 'All';
        }
      } else {
        $selected = {};
        if (options.length > 0) {
          const element = options.find((item) => item.value === value);
          displayValue = element.label;
          $selected[value] = element;
          setIsPopoverOpen(false);
        }
      }
      setSelected($selected);
      setSelectedValue(displayValue);
    } else {
      setSelectedValue(undefined);
      setSelected({});
    }
  }, [value, options]);
  useEffect(() => {
    const vh = document.getElementById(`dropdown-container-${key}`).getBoundingClientRect();
    const wv = document.getElementById(`selection-container-${key}`).clientWidth;
    const menuHeight = document.getElementById(`menu-container-${key}`).clientHeight;

    window.addEventListener('resize', handleResize(wv));

    // setWidth(wv);
    if (vh.bottom + menuHeight > window.innerHeight) {
      setEnd(true);
    } else {
      setEnd(false);
    }
    return () => { window.removeEventListener('resize', handleResize); };
  }, [end, windowW, value, isPopoverOpen, width, windowH, key]);
  const handleClick = useCallback(
    (item) => {
      let $selected = { ...selected };
      let data;
      if (multiple) {
        data = [];
        if ($selected[item.value]) {
          delete $selected[item.value];
        } else {
          $selected[item.value] = item;
        }

        if (value === undefined) {
          data.push(item.value);
        } else {
          const idx = value.findIndex((x) => x === item.value);
          if (idx === -1) {
            data = [...value, item.value];
          } else {
            data = [...value.slice(0, idx), ...value.slice(idx + 1)];
            if (data.length === 0) {
              data = undefined;
            }
          }
        }
      } else {
        $selected = {};
        data = item.value;
        $selected[item.value] = item;
      }

      setSelected($selected);

      onChange(data);
    },
    [multiple, selected, onChange, value]
  );

  const handleSearch = (e) => {
    if (setSearchValue) {
      setSearchValue(e.target.value);
    }
  };

  return (
    <SelectContainer
      ref={selectRef}
      {...props}
      id={`dropdown-container-${key}`}
      end={end ? 1 : 0}
      onMouseLeave={() => setIsPopoverOpen(false)}
    >
      {label && <SelectLabel size={size}>{label}</SelectLabel>}
      <Select
        id={`selection-container-${key}`}
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        {...props}
        size={size}
        color={!multiple
          && selected[value]
          && selected[value].color
          ? selected[value].color : undefined}
      >
        {!multiple && placeholder && !selectedValue && (
          <InnerLabel className={classNames('body-medium', 'weight-regular')}>{placeholder}</InnerLabel>
        )}
        {multiple && placeholder && (
          <InnerLabel className={classNames('body-medium', 'weight-regular')}>{placeholder}</InnerLabel>
        )}
        <ItemWrapper selectedValue={selectedValue} multiple={multiple}>
          {selectedValue && (
            <SelectedValue className={classNames('body-medium', 'weight-regular')}>
              <ValueText>
                {' '}
                {selectedValue}
              </ValueText>
            </SelectedValue>
          )}
          <Icon icon={isPopoverOpen ? 'top' : 'bottom'} size="1.3rem" />
        </ItemWrapper>
      </Select>
      <Options
        id={`menu-container-${key}`}
        width={width}
        end={end ? 1 : 0}
        open={isPopoverOpen}
      >
        {searchable && options.length > 4 && (
          <InputWrapper>
            <SearchInput
              iconType="prefix"
              type="text"
              value={searchValue}
              onChange={handleSearch}
              placeholder="Search..."
              className={classNames('caption', 'weight-medium')}
            />
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
          </InputWrapper>
        )}
        <OptionsWrap>
          {options.length > 0 ? (
            options.map((item, i) => (
              <OptionsItem
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                onClick={() => handleClick(item)}
                active={!!(item.value === value)}
                className={classNames('body-medium-14', 'weight-regular')}
                size={size}
              >
                {multiple && <Checkbox type="checkbox" readOnly checked={!!selected[item.value]} />}
                {item.img && (
                  <OptionsItemImg>
                    <img src={item.img} alt="avatar" />
                  </OptionsItemImg>
                )}
                {item.icon && <Icon icon={item.icon} color={item.value === value ? '#262626' : '#9D9D9D'} />}
                <OptionTextWrapper>
                  <ValueText>
                    {' '}
                    {item.label}
                  </ValueText>
                </OptionTextWrapper>
              </OptionsItem>
            ))
          ) : (
            <NoOptionsText className={classNames('body-medium', 'weight-regular')}>
              There are no options
            </NoOptionsText>
          )}
        </OptionsWrap>
      </Options>
    </SelectContainer>
  );
};

export default FilterSelect;

FilterSelect.propTypes = {
  size: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array
};

FilterSelect.defaultProps = {
  size: 'medium',
  options: []
};
