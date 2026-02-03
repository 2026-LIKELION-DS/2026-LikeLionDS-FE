import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import * as S from "@styles/SubmittedPageStyle";
import axios from "axios";


import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";
import Submitted from "@components/Submitted";

function TimeSelectionDone() {

  const location = useLocation(); //TimeSelection 페이지에서 이메일 가져옴
  const navigate = useNavigate();

  const { selectedTimes, email } = location.state || {};

  useEffect(() => {
    // 이메일 없으면 잘못된 접근
    if (!email) {
      navigate("/error");
      return;
    }

    const API_URL = import.meta.env.VITE_API_URL;

    //방금 면접 시간 제출한 경우
    if (selectedTimes && selectedTimes.length > 0) {
      const submitTime = async () => {
        try {

          const res = await axios.post(`${API_URL}/check/select/`, {
            email,
            slot_ids: selectedTimes,
          });

          console.log(res.data.message);
        } catch (err) {
          if (err.response?.status === 409) {
            alert("이미 면접 시간을 선택하셨습니다. 수정이 불가능합니다.");
          } else if (err.response?.status === 403) {
            alert("합격자만 면접 시간을 선택할 수 있습니다.");
          } else {
            alert("서버 오류가 발생했습니다.");
          }

          navigate("/error");
        }
      };

      submitTime();
      return;
    }

    //applicants에서 바로 온 사람(면접시간까지 제출후 재확인)
    const checkSubmitted = async () => {
      try {
        const res = await axios.post(
          `${API_URL}/check/submission-check/`,
          { email }
        );

        // 서버 기준으로도 제출 안 한 상태면 잘못된 접근
        if (!res.data.data?.submitted) {
          navigate("/error");
        }
      } catch {
        navigate("/error");
      }
    };

    checkSubmitted();

  }, [selectedTimes, email, navigate]);

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
