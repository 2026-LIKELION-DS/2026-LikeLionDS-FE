import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ScheduleWrapper = styled.div`
  width: 342px;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background-color: ${palette.boldBlack.ex8};
`;

export const DateText = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.48px;
`;
