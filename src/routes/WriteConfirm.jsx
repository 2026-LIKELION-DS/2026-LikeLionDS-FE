import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/WriteConfirmStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

import Step3 from "@/assets/icons/Step3.svg";
import Up from "@/assets/icons/Up.svg";

function WriteConfirm() {
  const navigate = useNavigate();
  const [showFab, setShowFab] = useState(false);

  // 휠 감지
  useEffect(() => {
    const handleWheel = () => {
      setShowFab(true);
    };

    window.addEventListener("wheel", handleWheel, { once: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <>
      <Header title="지원서 작성 확인"></Header>
      <N.Space>
        <N.StepGrid>
          <N.StepTitle>STEP 3</N.StepTitle>
          <N.StepText>작성한 답변 확인</N.StepText>
          <N.StepIcon src={Step3} alt="단계3" />
        </N.StepGrid>
        <N.FormGrid>
          <N.InformationFormGrid>
            <N.FormTitleBox>
              <N.InfoTitle>인적사항</N.InfoTitle>
              <N.InfoEdit>수정하기</N.InfoEdit>
            </N.FormTitleBox>
            <N.InfoBox>
              <N.InfoNameText>이름</N.InfoNameText>
              <N.InfoName>소랑이</N.InfoName>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoPhoneText>전화번호</N.InfoPhoneText>
              <N.InfoPhone>010-0000-0000</N.InfoPhone>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoMailText>메일주소</N.InfoMailText>
              <N.InfoMail>abc@duksung.ac.kr</N.InfoMail>
            </N.InfoBox>
          </N.InformationFormGrid>
          <N.AnswerFormGrid>
            <N.FormTitleBox>
              <N.InfoTitle>문항 답변 내역</N.InfoTitle>
              <N.AnsEdit>수정하기</N.AnsEdit>
            </N.FormTitleBox>
            <N.CommonPartBox>
              <N.CoText>공통질문</N.CoText>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>
                  사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용
                </N.CoQA>
              </N.CoQABox>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>
                  사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용
                </N.CoQA>
              </N.CoQABox>
            </N.CommonPartBox>
            <N.CommonPartBox>
              <N.InfoTitle>기획/디자인 파트별 질문</N.InfoTitle>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>
                  사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용
                </N.CoQA>
              </N.CoQABox>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>
                  사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용
                </N.CoQA>
              </N.CoQABox>
            </N.CommonPartBox>
          </N.AnswerFormGrid>
        </N.FormGrid>
        <N.Fixed
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
          <N.UpIcon src={Up} alt="위로"></N.UpIcon>
        </N.Fixed>
        <N.NextButtonGrid>
          <N.NextButton
            onClick={() => {
              navigate("/submit"); // 최종 제출 페이지나 완료 페이지
            }}>
            제출하기
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer />
    </>
  );
}

export default WriteConfirm;
