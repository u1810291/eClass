import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;    
  grid-area: navbar;
`;

export const UserInfo = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;    
`;

export const UserDetails = styled.div`
  padding: 5px;
  color: #171725;
`;
export const ActionBar = styled.div`
  padding-right: 10px;
  display:grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto auto ;
  grid-template-rows: auto; 
  justify-items: center;
  align-items: center;
`;
