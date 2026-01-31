import * as M_ from "@styles/JoinTargetStyle";
import * as M from "@styles/JoinPeriodStyle";

import Lottie from "./LottieComponent";
import loadingLottie from "@assets/motions/활동기간 모션/period.json";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Period from "@assets/icons/JoinPeriod.svg";
import Start from "@assets/icons/Period_start.svg";
import End from "@assets/icons/Period_End.svg";
import Arrow from "@assets/icons/arrow.svg";

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

  // 1. 부모 컨테이너 애니메이션 설정
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // 핵심: 0.5초 간격으로 자식들을 하나씩 등장시킴
      },
    },
  };

  // 2. 개별 이미지(자식) 애니메이션 설정
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, // 약간 작게 시작해서
      y: 20       // 아래에서 위로
    },
    visible: { 
      opacity: 1, 
      scale: 1,   // 원래 크기로
      y: 0,
      transition: { 
        type: "spring", // 툭 튀어나오는 탄성 효과
        stiffness: 100,
        damping: 10 
      }
    },
  };

  return (
    <>
      <M.TextContainer>
        <M.StyledTitleText>활동 기간</M.StyledTitleText>
        <M.TextWrapper>
          <M.Text>중도 탈퇴 없이 끝까지 성실히 활동에 참여할 수 있는 아기사자를 찾고 있어요.</M.Text>
        </M.TextWrapper>
      </M.TextContainer>

      {/* lottie */}
      <M.AnimationWrapper 
        ref={lottieRef}
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isPlaying ? "visible" : "hidden"}
      >
        <M.PeriodImg as={motion.img} src={Start} variants={itemVariants} alt="시작" />
        <M.ArrowImg as={motion.img} src={Arrow} variants={itemVariants} alt="화살표" />
        <M.PeriodImg as={motion.img} src={End} variants={itemVariants} alt="종료" />
      </M.AnimationWrapper>
    </>
  );
};

export default JoinPeriod;
