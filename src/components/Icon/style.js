import styled from "styled-components";

export const IconWrapper = styled.div``;
export const DynamicIcon = styled.div`
  background: url(${({ icon }) => icon});
`;
