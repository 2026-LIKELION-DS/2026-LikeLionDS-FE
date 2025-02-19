import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingLottie from "@assets/motions/노트북 모션/notebook.json";
import fire from "@assets/icons/img_fire.svg";
import dsAnimation from "@assets/logo/logo_dsAnimation.png";
import growltoworld from "@assets/logo/logo_growlToWorld.png";
import * as M from "@styles/MainLastPageStyle.js"; // 스타일 파일 import

function MainLastPage() {
  const deadline = new Date(2025, 1, 20, 18, 0, 0); // 2025년 2월 20일 18:00 마감

  const handleClick = () => {
    if (!isDeadlinePassed) {
      window.open("https://forms.gle/QDrszV6xmGcnxr6g6", "_blank");
    }
  };

  const calculateDday = () => {
    const now = new Date();
    const deadline = new Date(2025, 1, 20, 18, 0, 0); // 2025년 2월 20일 18:00 마감
  
    if (now >= deadline) {
      return "지원이 마감되었습니다!"; // 2월 20일 18:00 이후
    }
  
    const dDayStart = new Date(2025, 1, 20, 0, 0, 0);
    const d1Start = new Date(2025, 1, 19, 0, 0, 0);
  
    if (now >= dDayStart) {
      return "지원 마감까지 D-Day"; // 2월 20일 00:00 ~ 17:59
    }
  
    if (now >= d1Start) {
      return "지원 마감까지 D-1"; // 2월 19일 00:00 ~ 23:59
    }
  
    const diffDays = Math.floor((d1Start - now) / (1000 * 60 * 60 * 24));
    return `지원 마감까지 D-${diffDays}`;
  };  

  // D-Day 상태 및 마감 여부 관리
  const [dday, setDday] = useState(calculateDday());
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(new Date() >= deadline);

  // 1시간마다 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setDday(calculateDday());
      setIsDeadlinePassed(new Date() >= deadline);
    }, 1000 * 60 * 60);

    return () => clearInterval(timer);
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
      <M.Magam isDeadlinePassed={isDeadlinePassed}>
      <div>
  {!isDeadlinePassed && <img src={fire} alt="fire" />}
  <M.DdayText $isDeadlinePassed={isDeadlinePassed}>{dday}</M.DdayText>
  {!isDeadlinePassed && <img src={fire} alt="fire" />}
</div>

        <div>
          <M.DisabledButton $isDeadlinePassed={isDeadlinePassed} onClick={handleClick}>
            {isDeadlinePassed ? "지금은 모집 기간이 아니에요" : "지금 지원하러 가기"}
          </M.DisabledButton>
        </div>
      </M.Magam>
    </M.WrapperContainer>
  );
}

export default MainLastPage;
