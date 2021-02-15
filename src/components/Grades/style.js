import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 1fr;
  margin: 10px 0px 0px;
  `;

export const BigCalendar = styled.div`
  padding: 10px 0px 0px;
  `;
export const SmallCalendar = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
`;

export const Tag = styled.div`
  display: block;
`;
Tag.Header = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 7px;
`;
Tag.Body = styled.div``;
Tag.Item = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 7px;
`;
Tag.Block = styled.div`
  height: 20px;
  width: 40px;
  background: ${({ color }) => color};
  border-radius: 4px;
`;
Tag.Text = styled.div``;
