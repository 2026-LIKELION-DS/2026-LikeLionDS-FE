import React from "react";
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
          <span>지원 마감까지 D-14</span>
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
