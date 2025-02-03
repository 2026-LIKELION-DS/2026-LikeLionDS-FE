import React, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-web";

// Lottie 컴포넌트 정의
const LottieComponent = ({ animationData, loop, autoplay, speed, isPaused, isStopped, ...restProps }) => {
  // Lottie 애니메이션 컨테이너에 대한 ref
  const animationContainer = useRef(null);
  const [animationInstance, setAnimationInstance] = useState(null);

  // Lottie 애니메이션 로드 및 초기화
  useEffect(() => {
    // Lottie 애니메이션 옵션 설정
    const animationOptions = {
      container: animationContainer.current,
      renderer: "svg",
      loop: loop !== undefined ? loop : true, // 반복 여부
      autoplay: autoplay !== undefined ? autoplay : true, // 자동 실행 여부
      animationData: animationData, // 애니메이션 데이터
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // 비율 유지
      },
    };

    // Lottie 애니메이션 로드
    const animation = Lottie.loadAnimation(animationOptions);

    // Lottie 애니메이션 상태 업데이트
    setAnimationInstance(animation);

    //  컴포넌트 unmount 시 애니메이션 제거
    return () => {
      animation.destroy(); // 애니메이션 인스턴스 정리
    };
  }, [animationData, loop, autoplay]);

  // Lottie 인터랙션 관리
  useEffect(() => {
    if (animationInstance !== null) {
      // isPaused 프롭스에따라 일시정지 / 실행
      if (isPaused) {
        animationInstance.pause(); // 일시정지
      } else {
        animationInstance.play(); // 실행
      }

      // isStopped 프롭스에따라 일시정지
      if (isStopped) {
        animationInstance.stop();
      }

      // speed 프롭스에따라 애니메이션 속도 설정
      if (speed !== undefined) {
        animationInstance.setSpeed(speed);
      }
    }
  }, [isPaused, isStopped, speed, animationInstance]);

  return <div ref={animationContainer} {...restProps} />;
};

export default LottieComponent;
