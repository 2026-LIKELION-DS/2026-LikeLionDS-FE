import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as SS from "@styles/SubmittedPageStyle";
import * as S from "@styles/SubmittedApplication";

import kakao from "@/assets/icons/icon_kakaotalk.svg"; 

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";




function NoExistApplication({ title, messages = [], highlightText, showKakaoLink = false, onKakaoClick }) {


  return (
    <>
      <Header title="제출 여부 확인하기" />

      <SS.Space>
        
            <S.Wrapper>
              <S.Title>
                제출된 지원서가 없습니다
              </S.Title>
        
              <S.Card>
                <S.Text>
                    해당하는 이름, 전화번호, 메일로<br/>제출된 지원서가 없습니다.
                </S.Text>
                <S.Text>
                    관련 문의사항은 카카오톡 오픈채팅으로 부탁드립니다.
                </S.Text>
                <S.KakaoLink onClick={() => window.open("https://open.kakao.com/...", "_blank")}>
  <S.KakaoIMG src={kakao} alt="카카오톡 로고" />
  카카오톡 오픈채팅 바로가기
</S.KakaoLink>
              
              </S.Card>
              <S.Submit_Button>지원서 제출하러 가기</S.Submit_Button>
              {/* 링크 아직 안 걸어둠 */}
            </S.Wrapper>
      </SS.Space>


      <Footer />
    </>
  );
}

export default NoExistApplication;
