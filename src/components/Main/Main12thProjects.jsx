import React, { useEffect, useState, useRef } from "react";
import * as M from "@styles/Main12thProjectsStyle.js"; // 스타일 분리 파일 import
import dsBack from "@assets/logo/logo_ds_background.svg";
import underLineDS from "@assets/icons/icon_underlineDS.svg";
import four1 from "@assets/projects/사개절_1.png";
import four2 from "@assets/projects/사개절_2.png";
import four3 from "@assets/projects/사개절_3.png";
import four4 from "@assets/projects/사개절_4.png";
import ideathon1 from "@assets/projects/아이디어톤_1.jpg";
import ideathon2 from "@assets/projects/아이디어톤_2.jpg";
import ideathon3 from "@assets/projects/아이디어톤_3.jpg";
import ideathon4 from "@assets/projects/아이디어톤_4.jpg";
import ideathon5 from "@assets/projects/아이디어톤_5.png";
import pioneer1 from "@assets/projects/중앙해커톤_1.png";
import pioneer2 from "@assets/projects/중앙해커톤_2.png";
import pioneer3 from "@assets/projects/중앙해커톤_3.png";
import pioneer4 from "@assets/projects/중앙해커톤_4.png";
import pioneer5 from "@assets/projects/중앙해커톤_5.png";
import pioneer6 from "@assets/projects/중앙해커톤_6.png";
import Instagram from "@assets/icons/icon_instagram.svg";

function Main12thProjects() {
  const [translateX, setTranslateX] = useState(150); // 초기 위치 (오른쪽에서 시작)
  const animationFrameId = useRef(null); // requestAnimationFrame ID 저장

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY || document.documentElement.scrollTop;

      if (newScrollY >= 1300) {
        // 스크롤이 1400px 이상일 때만 동작
        const newTranslateX = Math.max(0, 150 - ((newScrollY - 1300) / window.innerHeight) * 150); // 1400px 이후부터 translateX 적용

        // 애니메이션 프레임 요청
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        animationFrameId.current = requestAnimationFrame(() => {
          setTranslateX(newTranslateX);
        });
      } else {
        setTranslateX(150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <M.WrapperContainer>
      <M.PageContainer>
        <M.WhatisDSdiv>
          {/* 스크롤 시 왼쪽으로 이동하는 배경 이미지 */}
          <M.DSBack src={dsBack} alt="dsBackground" $translateX={translateX} />
          <div>덕성여대</div>
          <div>멋쟁이사자처럼은?</div>
          <M.UnderLine src={underLineDS} />
          <span>
            매주 세션 1회, 팀별 스터디 1회 총 2번의 대면 만남을 통해 서로 상호교류하며 프로그래밍을 함께 공부합니다.
          </span>
        </M.WhatisDSdiv>
        <M.Projects12th>
          <span>작년 12기에는...</span>
          <M.ProjectsSlide1>
            <div className="slide-track">
              <img src={four1} alt="project1" />
              <img src={four2} alt="project2" />
              <img src={four3} alt="project3" />
              <img src={four4} alt="project4" />
              <img src={ideathon1} alt="ideathon1" />
              <img src={ideathon2} alt="ideathon2" />
              <img src={ideathon3} alt="ideathon3" />
              <img src={four1} alt="project1" />
              <img src={four2} alt="project2" />
              <img src={four3} alt="project3" />
              <img src={four4} alt="project4" />
              <img src={ideathon1} alt="ideathon1" />
              <img src={ideathon2} alt="ideathon2" />
              <img src={ideathon3} alt="ideathon3" />
            </div>
          </M.ProjectsSlide1>
          <M.ProjectsSlide2>
            <div className="slide-track">
              <img src={ideathon4} alt="ideathon4" />
              <img src={ideathon5} alt="ideathon5" />
              <img src={pioneer1} alt="pioneer1" />
              <img src={pioneer2} alt="pioneer2" />
              <img src={pioneer3} alt="pioneer3" />
              <img src={pioneer4} alt="pioneer4" />
              <img src={pioneer5} alt="pioneer5" />
              <img src={pioneer6} alt="pioneer6" />
              <img src={ideathon4} alt="ideathon4" />
              <img src={ideathon5} alt="ideathon5" />
              <img src={pioneer1} alt="pioneer1" />
              <img src={pioneer2} alt="pioneer2" />
              <img src={pioneer3} alt="pioneer3" />
              <img src={pioneer4} alt="pioneer4" />
              <img src={pioneer5} alt="pioneer5" />
              <img src={pioneer6} alt="pioneer6" />
            </div>
          </M.ProjectsSlide2>
        </M.Projects12th>
        <M.SessionInfo>
          <div>
            <span>세션</span>
            <p>
              <strong>7</strong>회
            </p>
          </div>
          <div>
            <span>파트별 스터디</span>
            <p>
              <strong>9</strong>회
            </p>
          </div>
          <div>
            <span>해커톤 및 프로젝트</span>
            <p>
              <strong>5</strong>+
            </p>
          </div>
        </M.SessionInfo>
        <M.More>
          <span>더 자세한 활동이 궁금하다면?</span>
          <M.ContentWrapper>
            <M.InstaMain
              onClick={() => window.open("https://www.instagram.com/likelion_ds/", "_blank", "noopener,noreferrer")}>
              <img src={Instagram} alt="instagram" />
              <div>인스타그램</div>
              <p>@likelion_ds</p>
            </M.InstaMain>
            <M.TextContainer>
              <span>을 확인해주세요.</span>
            </M.TextContainer>
          </M.ContentWrapper>
        </M.More>
      </M.PageContainer>
    </M.WrapperContainer>
  );
}

export default Main12thProjects;
