import styled from 'styled-components';

export const FilterBodyContainer = styled.div`
  display: flex;
  column-gap: 4px;
  flex-wrap: wrap;
`;

export const FilterBodyFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  label {
    color: #495158;
  }
`;

export const FilterClearAction = styled.div`
  display: flex;
  align-items: center;
  color: var(--custom-primary) !important;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  white-space: nowrap;
  span {
    min-width: 15px;
    height: 15px;
    border-radius: 8px;
    background-color: #ffe5e8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-left: 8px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
