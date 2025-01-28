import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import * as A from "@components/Splash/ArrowMotionStyle";

function ArrowMotion({ isAnimating, onClick }) {
  return (
    <>
      <A.ArrowMotion $isAnimating={isAnimating} onClick={onClick}>
        <A.LottieContainer>
          <DotLottieReact
            src="https://lottie.host/fbe96e3c-02ae-4751-83cb-6a14156fe11f/YKEmZMtXIH.lottie"
            loop
            autoplay
          />
        </A.LottieContainer>
      </A.ArrowMotion>
    </>
  );
}

export default ArrowMotion;
