import styled from "styled-components";
import palette from "@lib/colorPalette";
import * as M_ from "@styles/JoinTargetStyle";

export const StyledTitleText = styled(M_.TitleText)`
  margin-top: 212px;
`;

export const TextWrapper = styled.div`
  width: min(342px, 87.7vw);

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
  width: min(342px, 87.7vw);

  z-index: 1000;
`;

export const AnimationWrapper = styled.div`
  height: min(486px, 124.61vw);
  align-self: center;

  z-index: 999;

  margin-top: -170px;
  margin-bottom: -120px;

  > div {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
