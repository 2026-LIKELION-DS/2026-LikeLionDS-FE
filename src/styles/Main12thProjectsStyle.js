import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

// 왼쪽으로 무한 슬라이드하는 애니메이션
const slideAnimationLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* 절반 이동 후 자연스럽게 반복 */
`;

// 최상위 컨테이너 (패딩 추가)
export const WrapperContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0px;
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

export const DSBack = styled.img`
  height: 208px;
  display: block;
  position: absolute;
  top:-5%;
  left: 0%; /* 왼쪽 정렬 */
  transform: translateX(${(props) => props.$translateX}px); /* 스크롤 이동 적용 */
  transition: transform 0.1s ease-out;
  z-index: -100;
  max-width: none;
`;

export const WhatisDSdiv = styled.div`
  font-size: 28px;
  margin-top: 50px;
  padding: 0 20px;
  font-weight: 600;
  span {
    font-size: 18px;
    font-weight: 300;
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
    font-weight: 300;
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
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  div {
    margin-bottom: 50px;
    display: block;
    justify-items: center;
    align-items: center;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${palette.duksungBurgundy.ex4};
  }
  p {
    color: ${palette.style.white};
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  strong {
    font-size: 42px;
    margin: 10px;
  }
`;

export const More = styled.div`
  font-size: 18px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap; /* ✅ 요소들이 줄 바꿈되도록 설정 */
  align-items: center; /* ✅ 세로 중앙 정렬 유지 */
  gap: 5px; /* ✅ 요소 간격 추가 */
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
  }
  p {
    font-size: 12px;
    color: #78726e;
  }
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* ✅ 요소들이 화면 크기에 맞게 줄 바꿈되도록 설정 */
  align-items: center;
  gap: 5px; /* ✅ 요소 간격 조정 */
`;

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3px; /* ✅ "을 확인해주세요" 사이의 자연스러운 간격 추가 */
`;
