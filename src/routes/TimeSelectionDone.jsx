import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@styles/SubmittedPageStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";
import Submitted from "@components/Submitted";

function TimeSelectionDone() {
  return (
    <>
      <Header title="면접 시간 작성하기" />

      <S.Space>
        <Submitted
          title="작성이 완료되었습니다"
          messages={[
            {
              before: "2차 면접 시간 통보는 ",
              highlight: "2월 28일",
              after: " 적어주신 메일을 통해 이루어집니다.",
            },
            {
              before: "관련 문의사항은",
              after: "카카오톡 오픈채팅으로 부탁드립니다.",
            },
            {
              before: "감사합니다.",
            },
          ]}
          showKakaoLink
          onKakaoClick={() => window.open("https://open.kakao.com/o/sVlPfU7h", "_blank")}
        />
      </S.Space>

      <Footer />
    </>
  );
}

export default TimeSelectionDone;
