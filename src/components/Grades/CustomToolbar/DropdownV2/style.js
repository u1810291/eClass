import styled from 'styled-components';
import { PureCheckbox as Checkbox } from '../../../CheckBox';

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
    return '46px';
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

export const getBorderRadius = ({ size }) => `${['small', 'Small'].includes(size) ? '4px' : '8px'}`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectLabel = styled.div`
  color: #262626;
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
  padding: ${getPadding};
  padding-right: 0;
`;

export const InnerLabel = styled.div`
  color: #262626;
  margin-right: auto;
  padding-right: 12px;
  font-weight: 600;
`;

export const SelectedValue = styled.div`
  margin-right: 8px;
  color: #262626;
  font-weight: 600;
`;

export const Options = styled.div`
  padding: 8px 0;
  flex-direction: column;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: absolute;
  left: 0;
  top: 100%;
  box-shadow: 0px 6px 12px #494b7429;
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  background-color: #fff;
  min-width: 100%;
`;

export const OptionsWrap = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

export const OptionsItem = styled.div`
  padding: 4px 26px 4px 16px;
  color: ${({ active }) => (active ? '#262626' : '#262626')};
  font-size: 12px;
  line-height: 24px;
  font-weight: 600;
  transition: 0.2s ease;
  background: ${({ active }) => (active ? '#E9E9E9' : 'unset')};
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;

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
  background-color: ${({ color }) => (color ? color.bg : '#F8F8F8')};
  color: ${({ color }) => (color ? color.text : '#7E8299')};
  font-weight: 500;
  border-radius: ${getBorderRadius};
  justify-content: space-between;
  cursor: pointer;
  font-size: ${getFontSize};

  #Path_72 {
    fill: ${({ color }) => (color ? color.text : '#7E8299')};
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
  font-size: 12px;
  font-weight: 500;

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
