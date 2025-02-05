import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingLottie from "@assets/motions/노트북 모션/notebook.json";
import fire from "@assets/icons/img_fire.svg";
import dsAnimation from "@assets/logo/logo_dsAnimation.png";
import growltoworld from "@assets/logo/logo_growlToWorld.png";
import * as M from "@styles/MainLastPageStyle.js"; // 스타일 분리 파일 import

function MainLastPage() {
  const handleClick = () => {
    window.open("https://forms.gle/QDrszV6xmGcnxr6g6", "_blank");
  };

  const calculateDday = () => {
    const deadline = new Date(2025, 1, 20); // 2월 20일 (월은 0부터 시작 → 1이 2월)
    const today = new Date();

    // 시간(시, 분, 초, 밀리초)을 00:00:00으로 맞춰 날짜 차이만 비교
    deadline.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // 날짜 차이 계산 (밀리초 -> 일 단위 변환)
    const diffTime = deadline.getTime() - today.getTime(); // 밀리초 차이
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // 일 단위 변환

    return diffDays >= 0 ? `지원 마감까지 D-${diffDays}` : "지원 마감되었습니다"; // ✅ 정확한 계산
  };

  // D-Day 상태 관리
  const [dday, setDday] = useState(calculateDday());

  // 페이지 로드 및 날짜 변경 시 D-Day 업데이트
  useEffect(() => {
    const timer = setInterval(
      () => {
        setDday(calculateDday());
      },
      1000 * 60 * 60,
    ); // 1시간마다 업데이트

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  return (
    <M.WrapperContainer>
      <M.Container>
        <M.Image1 src={dsAnimation} alt="dsAnimation" />
        <M.Image2 src={growltoworld} alt="growltoworld" />
      </M.Container>
      <M.LoadingScreenContainer>
        <M.LottieContainer>
          <Lottie animationData={loadingLottie} loop={true} />
        </M.LottieContainer>
      </M.LoadingScreenContainer>
      <M.Magam>
        <div>
          <img src={fire} alt="fire" />
          <span>{dday}</span>
          <img src={fire} alt="fire" />
        </div>
        <div>
          <button onClick={handleClick}>지금 지원하러 가기</button>
        </div>
      </M.Magam>
    </M.WrapperContainer>
  );
}

export default MainLastPage;
