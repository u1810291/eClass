import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  padding: 16px 24px;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 100%;
  box-shadow: 0 6px 12px rgba(73, 75, 116, 0.16);
  border-radius: 8px;
  overflow: hidden;
  z-index: 9;
  background-color: #fff;
  row-gap: 16px;
  margin-top: 5px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;
export const Text = styled.div``;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
