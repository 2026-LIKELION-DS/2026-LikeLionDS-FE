import styled from "styled-components";
import palette from "@lib/colorPalette";
import * as M_ from "@styles/JoinTargetStyle";

export const StyledTitleText = styled(M_.TitleText)`
  margin-top: 212px;
`;

export const TextWrapper = styled.div`
  width: 342px;

  margin-top: 16px;
`;

export const Text = styled.p`
  color: ${palette.boldBlack.ex2};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.48px;
`;
