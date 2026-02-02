import React, { useState, useEffect } from "react";
import * as M from "@styles/MainStartPageStyle.js"; // 스타일 파일에서 가져오기
import splash from "@assets/logo/Logo14th.svg";
import whiteLine from "@assets/icons/icon_whiteLine.png";
import likelionBack from "@assets/logo/logo_likelion_background.svg";
import underLine from "@assets/icons/icon_underline.svg";

function MainStartPage({ scrollToSection }) {
  const [translateX, setTranslateX] = useState(150); // 초기값 (공백 최소화)
  const [scrollY, setScrollY] = useState(0); // 현재 스크롤 위치 저장

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // 스크롤 값에 따라 X 좌표 조정 (속도 조절 가능)
      const newTranslateX = Math.max(0, 150 - newScrollY * 0.3); // 속도 조정 가능

      // 애니메이션 프레임 최적화
      animationFrameId = requestAnimationFrame(() => setTranslateX(newTranslateX));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <M.WrapperContainer>
      <M.PageContainer>
        <img src={splash} alt="splash logo" style={{padding:"20px", width:"auto"}}/>
        <M.FlexBox>
          <M.ChartText>
            <p onClick={() => scrollToSection("start")}>멋쟁이사자처럼이란?</p>
            <p onClick={() => scrollToSection("partInfo")}>파트별 소개</p>
            <p onClick={() => scrollToSection("projects")}>덕성 멋사는</p>
            <p onClick={() => scrollToSection("join")}>아기사자 모집 안내</p>
            <p onClick={() => scrollToSection("faq")}>자주 묻는 질문</p>
          </M.ChartText>
          <M.WhiteLine src={whiteLine} alt="white line" />
        </M.FlexBox>
        <M.WhatisLLdiv>
          <M.LikelionBack
            id="likelionBackLogo"
            src={likelionBack}
            alt="likelionBackLogo"
            $translateX={translateX} // styled-components에서 사용
          />
          <div>멋쟁이사자처럼이란?</div>
          <M.UnderLine src={underLine} alt="underline" />
          <span>
            멋쟁이사자차럼 대학은 122개 대학, 12,000명 이상이 활동한 국내 최대 규모{" "}
            <strong>AI/IT 동아리</strong>입니다.
          </span>
          <span><strong>‘POSSIBILITY TO REALITY’</strong>라는 가치 아래, 아이디어만 있으면 누구나 자신의 서비스를 만들 수 있는 세상을 지향하며 성장해 왔습니다.</span>
          <span>각 대학별 정규 세션 및 스터디를 기반으로 활동하며, 중앙 해커톤 및 연합해커톤 등을 함께 하게 됩니다.</span>
        </M.WhatisLLdiv>
      </M.PageContainer>
    </M.WrapperContainer>
  );
}

export default MainStartPage;
