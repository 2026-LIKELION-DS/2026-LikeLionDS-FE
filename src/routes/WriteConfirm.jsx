import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import * as N from "@styles/WriteConfirmStyle";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

import Step4 from "@/assets/icons/Step4.svg";
import Up from "@/assets/icons/Up.svg";

function WriteConfirm() {
  const nextButtonRef = useRef(null);
  const [isNextVisible, setIsNextVisible] = useState(true);

  const navigate = useNavigate();
  const [showFab, setShowFab] = useState(false);
  const location = useLocation();

  const isEdit = location.state?.isEdit ?? false;
  const formData = location.state?.formData ?? {};
  const answerData = location.state?.answerData;

  const [form, setForm] = useState(formData);

  useEffect(() => {
    if (!nextButtonRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNextVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    observer.observe(nextButtonRef.current);

    return () => observer.disconnect();
  }, []);

  //수정으로 이동
  useEffect(() => {
    if (location.state?.isEdit) {
      setForm(location.state.formData);
    }
  }, []);

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

  const handleEdit = () => {
    navigate("/writeinformation", {
      state: {
        isEdit: true,
        formData: form,
      },
    });
  };

  return (
    <>
      <Header title="서류 지원서 작성"></Header>
      <N.Space>
        <N.StepGrid>
          <N.StepTitle>STEP 4</N.StepTitle>
          <N.StepText>작성한 답변 확인</N.StepText>
          <N.StepIcon src={Step4} alt="단계3" />
        </N.StepGrid>
        <N.FormGrid>
          <N.InformationFormGrid>
            <N.FormTitleBox>
              <N.InfoTitle>인적사항</N.InfoTitle>
              <N.InfoEdit
                onClick={() => {
                  navigate("/writeinformation", {
                    state: {
                      isEdit: true,
                      formData: form,
                    },
                  });
                }}>
                수정하기
              </N.InfoEdit>
            </N.FormTitleBox>
            <N.InfoBox>
              <N.InfoNameText>이름</N.InfoNameText>
              <N.InfoName>{formData?.name ?? ""}</N.InfoName>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoNameText>전화번호</N.InfoNameText>
              <N.InfoPhone>{formData?.phone_number ?? ""}</N.InfoPhone>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoNameText>메일주소</N.InfoNameText>
              <N.InfoMail>{formData?.email ?? ""}</N.InfoMail>
            </N.InfoBox>
          </N.InformationFormGrid>
          <N.AnswerFormGrid>
            <N.FormTitleBox>
              <N.InfoTitle>문항 답변 내역</N.InfoTitle>
              <N.AnsEdit
                onClick={() => {
                  navigate("/writeanswer", {
                    state: {
                      isEdit: true,
                      formData: form,
                      answerData: answerData,
                    },
                  });
                }}>
                수정하기
              </N.AnsEdit>
            </N.FormTitleBox>
            <N.CommonPartBox>
              <N.CoText>공통질문</N.CoText>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>{answerData?.common1 ?? ""}</N.CoQA>
              </N.CoQABox>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>{answerData?.common2 ?? ""}</N.CoQA>
              </N.CoQABox>
            </N.CommonPartBox>
            <N.CommonPartBox>
              <N.InfoTitle>기획/디자인 파트별 질문</N.InfoTitle>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>{answerData?.part1 ?? ""}</N.CoQA>
              </N.CoQABox>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>{answerData?.part2 ?? ""}</N.CoQA>
              </N.CoQABox>
            </N.CommonPartBox>
          </N.AnswerFormGrid>
        </N.FormGrid>
        <N.Fixed
          $withNext={isNextVisible}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
          <N.UpIcon src={Up} alt="위로"></N.UpIcon>
        </N.Fixed>
        <N.NextButtonGrid ref={nextButtonRef}>
          <N.NextButton
            onClick={() => {
              navigate("/applicationformdone");
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
