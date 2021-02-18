import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  max-height: 600px;
  overflow-y: hidden;
  position: relative;
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  min-width: 100%;
  overflow: scroll;
`;

Content.Header = styled.span``;

Content.Item = styled.div`
  display:flex;
  height: 50px;
  border: 1px solid #F1F1F5; 
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
`;
Content.ItemBody = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
Content.ItemTop = styled.span``;
Content.ItemBottom = styled.span``;
Content.Cancel = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`;
