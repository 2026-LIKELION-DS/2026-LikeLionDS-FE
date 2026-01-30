import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import * as N from "@styles/WriteConfirmStyle";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

import Step4 from "@/assets/icons/Step4.svg";
import Up from "@/assets/icons/Up.svg";

const API_URL = import.meta.env.VITE_API_URL;

function WriteConfirm() {
  const nextButtonRef = useRef(null);
  const [isNextVisible, setIsNextVisible] = useState(true);

  const navigate = useNavigate();
  const [showFab, setShowFab] = useState(false);
  const location = useLocation();

  const isEdit = location.state?.isEdit ?? false;

  const formData = location.state?.formData ?? {};
  const answerData = location.state?.answerData;
  const payload = location.state?.payload ?? null;

  const [form, setForm] = useState(formData);

  const currentPart = form?.part ?? payload?.part ?? formData?.part;

  const isPD = currentPart === "PD" || currentPart === "PM";
  const isBE = currentPart === "BE";

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
    if (location.state?.isEdit && location.state?.formData) {
      setForm(location.state.formData);
    }
  }, [location.state]);

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
        answerData,
        payload,
      },
    });
  };

  const submitFinal = async () => {
    if (!payload) return;

    const fixedPayload = {
      ...payload,
      part: payload.part === "PM" ? "PD" : payload.part === "FE" ? "FE" : payload.part === "BE" ? "BE" : payload.part,
      name: form?.name,
      phone_number: form?.phone_number,
      email: form?.email,
      student_id: form?.student_id,
      department: form?.department,
      academic_status: form?.academic_status,
    };

    await axios.post(`${API_URL}/application/`, fixedPayload);
    navigate("/applicationformdone");
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
              <N.InfoEdit onClick={handleEdit}>수정하기</N.InfoEdit>
            </N.FormTitleBox>
            <N.InfoBox>
              <N.InfoNameText>이름</N.InfoNameText>
              <N.InfoName>{form?.name ?? ""}</N.InfoName>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoNameText>전화번호</N.InfoNameText>
              <N.InfoPhone>{form?.phone_number ?? ""}</N.InfoPhone>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoNameText>메일주소</N.InfoNameText>
              <N.InfoMail>{form?.email ?? ""}</N.InfoMail>
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
                      answerData,
                      payload,
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

            {isPD && (
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
            )}

            {isBE && (
              <N.CommonPartBox>
                <N.InfoTitle>백엔드 파트별 질문</N.InfoTitle>
                <N.CoQABox>
                  <N.CoQ>자바(Java) 경험 유무</N.CoQ>
                  <N.CoQA>{answerData?.TryJava === "yes" ? "있다" : "없다"}</N.CoQA>
                </N.CoQABox>
              </N.CommonPartBox>
            )}
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
          <N.NextButton onClick={submitFinal}>제출하기</N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer />
    </>
  );
}

export default WriteConfirm;
