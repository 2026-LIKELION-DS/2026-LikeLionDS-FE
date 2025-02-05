import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${(props) => props.$marginTop || "0px"};

  margin-bottom: 91.24px;
`;

export const AnimationWrapper = styled.div`
  width: 174px;
  height: 174px;

  margin-top: 35px;
  margin-bottom: 63px;
`;

export const ImgWrapper = styled.div`
  width: 40px;
  height: 91px;
`;

export const TitleContainer = styled.div`
  width: fit-content;
`;

// 애니메이션
const TextAnimation = keyframes`
from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const TextAniContainer = styled.div`
  width: 100%;

  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 0px;

  background: ${palette.style.white};

  margin-bottom: 63px;
`;

export const TextAniWrapper = styled.div`
  display: flex;
  animation: ${TextAnimation} 5s linear infinite;

  box-sizing: border-box;

  flex-wrap: nowrap;
  gap: 0px;

  height: 100%;

  img {
    flex-shrink: 0;
    font-size: 0;
    margin: 0;
    display: block;
    line-height: 0;
    vertical-align: middle;
    object-fit: contain;
  }
`;
