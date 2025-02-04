import styled from "styled-components";
import palette from "@lib/colorPalette";

// 최상위 컨테이너 (패딩 추가)
export const WrapperContainer = styled.div`
  padding: 0 20px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 48px;
  margin-bottom: 100px; /* 공백 최소화 */
`;

export const ChartText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  p {
    font-size: 16px;
    font-weight: 300;
    text-align: right;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      color: ${palette.realOrange.ex4};
    }
  }
`;

export const WhiteLine = styled.img`
  height: 145px;
  width: 2px;
  margin-left: 20px;
`;

// 스크롤에 따라 부드럽게 이동하는 이미지
export const LikelionBack = styled.img`
  height: 208px;
  display: block;
  position: absolute;
  top: 67%;
  left: 0;
  transform: translateX(${(props) => props.$translateX}px);
  transition: transform 0.1s ease-out;
`;

export const WhatisLLdiv = styled.div`
  font-size: 28px;
  font-weight: 400;
  margin-top: 20px;

  span {
    font-size: 18px;
    margin-top: 20px;
    font-weight: 200;
    display: block;
  }

  strong {
    font-weight: bold;
  }
`;

export const PageContainer = styled.div`
  min-height: 100vh; /* 공백 줄이기 */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UnderLine = styled.img`
  width: 160px;
  display: block;
`;
