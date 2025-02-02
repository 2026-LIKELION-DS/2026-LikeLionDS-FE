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

  font-size: 16px;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.48px;
`;

export const TextContainer = styled.div`
  z-index: 1000;
`;

export const AnimationWrapper = styled.div`
  width: 486px;
  height: 486px;
  align-self: center;

  z-index: 999;

  margin-top: -170px;
  margin-bottom: -120px;
`;
