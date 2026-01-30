import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as SS from "@styles/SubmittedPageStyle";
import * as S from "@styles/SubmittedApplicationStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";
import check from "@/assets/icons/check.svg";
import underline from "@/assets/icons/underline.svg";
import logo from "@/assets/logo/logo_ds_topbar_orange.svg";

function ApplicationFormDone() {
  return (
    <>
      <Header title="서류 지원서 작성" />
      <SS.Space>
        <S.Wrapper>
          <S.Icon src={check} alt="완료" />
          <S.Title>
            제출이 완료되었습니다.
            <S.UnderLine src={underline} alt="밑줄" />
          </S.Title>
          <S.Checking_Card>
            <S.Text>
              1차 합격자 개별 통보는 <S.Highlight>2월 25일</S.Highlight>
              <br />
              적어주신 메일을 통해 이루어집니다.
            </S.Text>
            <S.Text>지원해주셔서 감사합니다.</S.Text>
          </S.Checking_Card>
          <S.LogoFooter>
            <S.DSLogo src={logo} alt="덕성로고 오렌지" />
          </S.LogoFooter>
        </S.Wrapper>
      </SS.Space>

      <Footer />
    </>
  );
}

export default ApplicationFormDone;
