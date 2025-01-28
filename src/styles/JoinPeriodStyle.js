import styled from "styled-components";
import palette from "@lib/colorPalette";

export const TextWrapper = styled.div`
  width: 342px;
`;

export const Text = styled.p`
  color: ${palette.boldBlack.ex2};
  /* Light_16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.48px;
`;
