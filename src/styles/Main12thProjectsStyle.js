import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

// 최상위 컨테이너 (패딩 추가)
export const WrapperContainer = styled.div`
  padding: 0 20px;
`;

// 스크롤에 따라 이동하는 배경 이미지
export const DSBack = styled.img`
  height: 208px;
  display: block;
  position: absolute;
  left: 0%;
  top: 120%;
  transform: translateX(${(props) => props.$translateX}px);
  transition: transform 0.1s ease-out;
`;

export const WhatisDSdiv = styled.div`
  font-size: 28px;
  margin-top: 270px;

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
  }
`;

export const slideAnimationLeft = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const slideAnimationRight = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const ProjectsSlide1 = styled.div`
  display: flex;
  margin-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 224px;
    height: 126px;
    margin-right: 10px;
    animation: ${slideAnimationLeft} 20s linear infinite;
  }
`;

export const ProjectsSlide2 = styled.div`
  display: flex;
  margin-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 224px;
    height: 126px;
    margin-right: 10px;
    animation: ${slideAnimationRight} 20s linear infinite;
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
