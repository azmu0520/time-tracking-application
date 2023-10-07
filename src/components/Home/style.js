import styled from "styled-components";
export const Wrap = styled.div``;

Wrap.Time = styled.h3`
  color: ${({ stop }) => (stop > 0 ? "#000" : "red")};
`;
