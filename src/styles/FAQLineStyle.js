import styled from "styled-components";

export const LineWrapper = styled.div`
  width: 342px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: ${(props) => props.$marginTop};
`;

export const Line = styled.div`
  width: 50px;
  height: 1px;

  background: white;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.42px;

  margin-right: 11px;
  margin-left: 11px;
`;
