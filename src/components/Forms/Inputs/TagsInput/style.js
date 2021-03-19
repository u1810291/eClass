import styled, { css } from 'styled-components';
import { ReactComponent as IconClose } from '../../../../assets/icons/close.svg';
import { helperText } from '../style';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: text;
  input{
    outline: none !important;
    &:focus{
      outline: none !important;
    }
  }
`;

const common = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 30px;
  border-radius: 8px;
  padding: 8px 0 8px 25px;
`;

export const Input = styled.input`
  text-indent: 10px;
  border: none;
  height: 100%;
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: var(--font-normal);
  color: #181c32;
  line-height: 1.1;
  margin: 2px 8px 2px 0;
  box-shadow: 0 6px 12px 0 rgba(73, 75, 116, 0.04);
  border-radius: 4px;
  background: #fff;
`;

export const TagsWrapper = styled.div`
  ${common};
  border: 1px solid ${({ type }) => (type === 'error' ? '#f29392' : '#e2e2ea')} ;
  background-color: ${({ white }) => (white ? '#ffffff' : '#F5F5F5')};
  &:hover {
    background-color: ${({ white }) => (white ? '#ffffff' : '#E9E9E9')};
  }
  &::placeholder {
    color: #9d9d9d;
  }
  ${TagItem} {
    background-color: ${({ white }) => (white ? '#F5F5F5' : ' #ffffff')};
  }
  input {
    border: 0;
    background: none;
    outline: none !important;
  }
`;

export const CloseIcon = styled(IconClose)`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  cursor: pointer;
  fill: #7e8299;
`;

export const Helper = styled.div`
  ${helperText}
  bottom: -16px;
  position: absolute;
`;
