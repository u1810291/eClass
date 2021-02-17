import styled from 'styled-components';
import { PureCheckbox as Checkbox } from '../../CheckBox';

export const getFontSize = ({ size }) => {
  switch (size) {
  case 'large' || 'Large':
    return '14px';
  case 'medium' || 'Medium':
    return '13px';
  case 'small' || 'Small':
    return '12px';
  default:
    return '13px';
  }
};

export const getHeight = ({ size }) => {
  switch (size) {
  case 'large' || 'Large':
    return '43px';
  case 'medium' || 'Medium':
    return '35px';
  case 'small' || 'Small':
    return '27px';
  default:
    return '35px';
  }
};

export const getPadding = ({ size }) => {
  switch (size) {
  case 'large' || 'Large':
    return '0 25px';
  case 'medium' || 'Medium':
    return '0 17px';
  case 'small' || 'Small':
    return '0 12px';
  default:
    return '0 17px';
  }
};

export const getBackgroundColor = (props) => {
  if (props.color) {
    return props.color.bg;
  } if (props.white) {
    return '#FFFFFF';
  } if (props.tertiary) {
    return 'unset';
  }
  return '#F5F5F5';
};

export const getColor = (props) => {
  if (props.disabled) {
    return '#C4C4C4 !important';
  } if (props.color) {
    return `${props.color.text} !important`;
  } if (props.white || props.tertiary) {
    return '#262626 !important';
  }
  return '#9D9D9D !important';
};

export const getJustifyContent = (props) => {
  if (props.multiple) {
    return 'flex-end';
  } if (props.selectedValue) {
    return 'space-between';
  }
  return 'flex-end';
};

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: ${getJustifyContent};
  column-gap: ${({ multiple }) => (multiple ? '0px' : '8px')};
  width: ${({ selectedValue, multiple }) => (selectedValue && !multiple ? '100%' : 'unset')};
`;

export const getBorderRadius = ({ size }) => `${['small', 'Small'].includes(size) ? '4px' : '8px'}`;

export const SelectContainer = styled.div`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
`;

export const NoOptionsText = styled.div`
  padding: 16px;
`;

export const SelectLabel = styled.div`
  color: #262626;

  line-height: 24px;

  padding: ${getPadding};
  padding-right: 0;
`;

export const InnerLabel = styled.div`
  white-space: nowrap;
  margin-right: 8px;
`;

export const SelectedValue = styled.div`
  display: flex;
`;

export const ValueText = styled.div`
  white-space: nowrap;
`;

export const MultiSelectValue = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Options = styled.div`
  padding: 8px 0;
  flex-direction: column;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: absolute;
  left: 0;
  top: 100%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;

  width: ${({ width }) => `${width}px`};
  height: fit-content;
  background: #fff;
  margin-bottom: ${({ end }) => (end ? '45px' : '0')};
  margin-top: ${({ end }) => (end ? '0' : '45px')};
  z-index: 10;



`;

export const OptionsWrap = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

export const OptionTextWrapper = styled.div`
  display: flex;
  column-gap: 3px;
`;

export const OptionsItem = styled.div`
  outline: none;
  display: flex;
  padding: 11px 24px;
  color: ${({ active }) => (active ? '#262626' : '#9D9D9D')};
  box-sizing: border-box;
  transition: 0.2s ease;
  background: ${({ active }) => (active ? '#E9E9E9' : 'unset')};
  cursor: pointer;

  align-items: center;
  column-gap: 8px;
  ${Checkbox} {
    margin-right: 12px;
  }

  &:hover {
    /*background: #F8F8F8;*/
    ${Checkbox} {
      background: #d9d9d9;

      &:checked {
        background: #e86868;
      }
    }
  }
`;

export const Select = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  padding: ${getPadding};
  height: ${getHeight};
  background-color: ${getBackgroundColor};
  color: ${getColor};
  border-radius: ${getBorderRadius};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  border: ${({ tertiary }) => (tertiary ? '1px solid #262626' : '0px')};
  justify-content: space-between;
  column-gap: 8px;
  path {
    fill: ${getColor};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  background-color: #f8f8f8;
  border-radius: 8px;
  line-height: 18px;
  padding: 14px 24px;
  border: 0;
  outline: none;

  &::placeholder {
    color: #7e8299;
  }
`;

export const OptionsItemImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
