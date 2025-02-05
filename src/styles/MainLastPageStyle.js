import styled from "styled-components";
import palette from "@lib/colorPalette";

// 최상위 컨테이너 (패딩 추가)
export const WrapperContainer = styled.div`
  /* padding: 0 20px; */
`;

export const LoadingScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px; /* Adjust height to fit the Lottie animation properly */
`;

export const LottieContainer = styled.div`
  position: absolute;
  bottom: auto;
`;


export const Magam = styled.div`
  margin-top: 200px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;

    img {
      width: 30px;
      margin: 10px;
    }
  }
`;

// D-Day 텍스트 색상 변경 (마감 시 회색)
export const DdayText = styled.span`
  color: ${({ $isDeadlinePassed }) => ($isDeadlinePassed ? "#78726E" : palette.realOrange.ex4)};
  font-weight: 500;
`;

// 버튼 스타일 변경 (모집 마감 시 회색)
export const DisabledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 88px;
  width: 342px;
  height: 65px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 24px;
  border: none;
  cursor: ${({ $isDeadlinePassed }) => ($isDeadlinePassed ? "default" : "pointer")};
  background-color: ${({ $isDeadlinePassed }) => ($isDeadlinePassed ? "#78726E" : palette.realOrange.ex4)};
  color: ${({ $isDeadlinePassed }) => ($isDeadlinePassed ? "#FFFFFF" : palette.style.white)};
`;



// 부모 컨테이너 (배경 유지)
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* 크기 조절 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// X자로 배치된 이미지 스타일
export const XImage = styled.img`
  position: absolute;
  width: auto;
  height: 80px; /* 크기 조절 */
  opacity: 0.9; /* 살짝 투명하게 */
`;

// 첫 번째 이미지 (기울어짐 적용)
export const Image1 = styled(XImage)`
  transform: rotate(-15deg);
  z-index: 2; /* 위쪽으로 배치 */
`;

// 두 번째 이미지 (반대 방향으로 기울어짐 적용)
export const Image2 = styled(XImage)`
  transform: rotate(15deg);
  z-index: 1; /* 아래쪽으로 배치 */
`;
