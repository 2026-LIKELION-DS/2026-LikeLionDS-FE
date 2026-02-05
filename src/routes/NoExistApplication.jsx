import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as SS from "@styles/SubmittedPageStyle";
import * as S from "@styles/SubmittedApplicationStyle";

import kakao from "@/assets/icons/icon_kakaotalk.svg"; 

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";




function NoExistApplication({ title, messages = [], highlightText, showKakaoLink = false, onKakaoClick }) {
  const navigate = useNavigate();
  // 마감일 설정 (2026년 2월 19일 18:00)
  const deadline = new Date(2026, 1, 19, 18, 0, 0);

 // 현재 시간이 마감 기한을 넘었는지 확인하는 함수
 const checkDeadline = () => new Date() >= deadline;

 // 마감 여부 상태 관리
 const [isDeadlinePassed, setIsDeadlinePassed] = useState(checkDeadline());

 useEffect(() => {
  // 실시간 상태 업데이트를 위한 타이머 (1분 간격)
  const timer = setInterval(() => {
    setIsDeadlinePassed(checkDeadline());
  }, 60000);
  return () => clearInterval(timer);
}, []);

const handleClick = () => {
  if (!isDeadlinePassed) {
    navigate("/InformationCollection");
  }
};

  return (
    <>
      <Header title="제출 여부 확인하기" />

      <SS.Space>
        <S.Wrapper>
          <S.Title>제출된 지원서가 없습니다</S.Title>

          <S.Card>
            <S.Text>
              해당하는 이름, 전화번호, 메일로
              <br />
              제출된 지원서가 없습니다.
            </S.Text>
            <S.Text>
              관련 문의사항은 <br />
              카카오톡 오픈채팅으로 부탁드립니다.
            </S.Text>
            <S.KakaoLink onClick={() => window.open("https://open.kakao.com/o/sruBFWei", "_blank")}>
              <S.KakaoIMG src={kakao} alt="카카오톡 로고" />
              카카오톡 오픈채팅 바로가기
            </S.KakaoLink>
          </S.Card>
          <S.DisabledButton $isDeadlinePassed={isDeadlinePassed} onClick={handleClick}>
            {isDeadlinePassed ? "지금은 모집 기간이 아니에요" : "지원서 제출하러 가기"}
          </S.DisabledButton>
        </S.Wrapper>
      </SS.Space>

      <Footer />
    </>
  );
}

export default NoExistApplication;
