import styled from "styled-components";
import palette from "@lib/colorPalette";

// 최상위 컨테이너 (패딩 추가)
export const WrapperContainer = styled.div`
  padding: 0 20px;
  max-width: 390px; /* 전체 화면에서 좌우 padding을 제외한 최대 너비 */
  margin: 0 auto; /* 중앙 정렬 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  position: relative; /* 자식 absolute 요소가 벗어나지 않도록 설정 */
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
  top: 60%;
  left: 55%; /* 중앙 정렬 */
  transform: translateX(${(props) => props.$translateX - 200}px); /* 가운데 정렬 보정 */
  transition: transform 0.1s ease-out;
  z-index: -100;
  overflow: hidden;
  max-width: 100vw; /* 가로 스크롤 방지 */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100vw - 40px); /* 최대 너비 제한 */
  margin: 0 auto;
  overflow: hidden; /* 가로 스크롤 방지 */
  position: relative; /* absolute 요소 정리 */
`;

export const UnderLine = styled.img`
  width: 160px;
  display: block;
`;
