import styled from 'styled-components';

export const Container = styled.div``;
export const Filter = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
`;
Filter.Title = styled.div`
  line-height: 26px;
  position: relative;
  color: #434343;
`;
Filter.Option = styled.div`
  margin-top: 5px;
  margin-left: 30px;
  position: relative;
  color: #92929d;
`;
Filter.OptionLink = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  position: relative;
  color: #426a92;
  text-decoration: underline;
  cursor: pointer;
`;
Filter.Right = styled.div`
  position: absolute;
  right: 0px;
  padding-top: 30px;
  margin-right: 50px;
`;
