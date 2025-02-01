import * as M_ from "@styles/JoinTargetStyle";
import * as M from "@styles/JoinPeriodStyle";

import Lottie from "./LottieComponent";
import loadingLottie from "@assets/motions/활동기간 모션/period.json";
import { useEffect, useRef, useState } from "react";

const JoinPeriod = () => {
  const lottieRef = useRef(null); // <M.AnimationWrapper> 요소 참조하는 데 사용
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // console.log("lottieRef.current: ", lottieRef.current);

    // IntersectionObserver 특정 요소가 화면에 얼마나 보이는지 감지
    // entries 관찰하는 요소에 대한 상태 배열
    const observer = new IntersectionObserver(
      (entries) => {
        // 첫 번째 관찰 요소가 화면에 일정 비율 이상 나타나면 ..
        if (entries[0].isIntersecting) {
          // console.log("애니메이션 실행");
          setIsPlaying(true);
        }
      },
      { threshold: 0.5 }, // lottieRef가 화면의 50%이상 보일 때 애니메이션 실행
    );

    // lottieRef가 참조하는 요소가 렌더링 되면 ... 추적
    if (lottieRef.current) {
      observer.observe(lottieRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <M.TextContainer>
        <M.StyledTitleText>활동 기간</M.StyledTitleText>
        <M.TextWrapper>
          <M.Text>중도 탈퇴 없이 끝까지 성실히 활동에 참여할 수 있는 아기사자를 찾고 있어요.</M.Text>
        </M.TextWrapper>
      </M.TextContainer>

      {/* lottie */}
      <M.AnimationWrapper ref={lottieRef}>
        <Lottie animationData={loadingLottie} speed={3} loop={false} autoplay={false} isPaused={!isPlaying} />
      </M.AnimationWrapper>
    </>
  );
};

export default JoinPeriod;
