import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ScheduleWrapper = styled.div`
  width: 335px;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${(props) => (props.$isVisible ? palette.duksungBurgundy.ex5Primary : palette.boldBlack.ex8)};
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
`;

export const DateText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.48px;

  width: 96px;

  margin-left: -17.5px;
`;
