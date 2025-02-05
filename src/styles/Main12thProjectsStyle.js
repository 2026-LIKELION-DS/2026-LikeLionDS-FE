import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

// 왼쪽으로 무한 슬라이드하는 애니메이션
const slideAnimationLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* 절반 이동 후 자연스럽게 반복 */
`;

// 최상위 컨테이너 (패딩 추가)
export const WrapperContainer = styled.div`
  /* padding: 0 20px;*/
  max-width: 390px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0;
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100vw - 40px); /* 최대 너비 제한 */
  margin: 0 auto;
  overflow: hidden;
  position: relative; /* absolute 요소 정리 */
`;

export const DSBack = styled.img`
  height: 208px;
  display: block;
  position: absolute;
  top: 13%;
  left: 10%; /* 왼쪽 정렬 */
  transform: translateX(${(props) => props.$translateX}px); /* 스크롤 이동 적용 */
  transition: transform 0.1s ease-out;
  z-index: -100;
  max-width: none;
  width: 746px;
`;

export const WhatisDSdiv = styled.div`
  font-size: 28px;
  margin-top: 270px;
  padding: 0 20px;
  span {
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 58px;
    margin-top: 20px;
    display: block;
  }

  strong {
    font-weight: bold;
  }
`;

export const UnderLine = styled.img`
  width: 160px;
  display: block;
`;

export const Projects12th = styled.div`
  display: block;
  margin-bottom: 58px;
  span {
    font-weight: 200;
    font-size: 18px;
    padding: 0 20px;
  }
`;

// export const slideAnimationLeft = keyframes`
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(100%); }
// `;

// 오른쪽으로 슬라이드하는 무한 애니메이션
const slideAnimationRight = keyframes`
  0% { transform: translateX(-50%); } /* 가장 오른쪽에서 시작 */
  100% { transform: translateX(0%); } /* 왼쪽에서 오른쪽으로 이동 */
`;

export const ProjectsSlide1 = styled.div`
  display: flex;
  margin-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  .slide-track {
    display: flex;
    width: calc(224px * 16 * 2); /* 원본 + 복제 */
    animation: ${slideAnimationLeft} 20s linear infinite; /* 무한 반복 */
    img {
      width: 224px;
      height: 126px;
      margin-right: 10px;
      animation: ${slideAnimationLeft} 20s linear infinite;
    }
  }
`;

export const ProjectsSlide2 = styled.div`
  display: flex;
  margin-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;

  .slide-track {
    display: flex;
    animation: ${slideAnimationRight} 20s linear infinite;
    width: calc(224px * 16 * 2); /* 원본 + 복제 */

    img {
      width: 224px;
      height: 126px;
      margin-right: 10px;
      flex-shrink: 0;
      animation: ${slideAnimationRight} 20s linear infinite;
    }
  }
`;

export const SessionInfo = styled.section`
  display: block;
  justify-items: center;
  align-items: center;
  div {
    margin-bottom: 50px;
    display: block;
    justify-items: center;
    align-items: center;
  }
  span {
    font-size: 20px;
    color: ${palette.duksungBurgundy.ex4};
  }
  p {
    color: ${palette.style.white};
    font-size: 26px;
  }
  strong {
    font-size: 42px;
    margin: 10px;
  }
`;

export const More = styled.div`
  font-size: 18px;
  padding: 20px;
`;

export const InstaMain = styled.div`
  width: 199px;
  height: 39px;
  border-radius: 20px;
  background: var(--Bold-Black-ex9, #292625);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 18px;
  margin: 9px 9px 9px 0;
  img {
    width: 18px;
  }
  span {
    color: ${palette.style.white};
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    color: #78726e;
  }
`;
export const TextContainer = styled.div`
  display: inline; /* 기본적으로 한 줄에 표시 */

  @media (max-width: 401px) {
    display: flex;
    flex-direction: column; /* 401px 이하에서 세로 정렬 */
    align-items: flex-start;
  }
`;

export const HighlightText = styled.span`
  @media (max-width: 401px) {
    display: block; /* 401px 이하일 때 "확인해주세요"만 줄바꿈 */
  }
`;
