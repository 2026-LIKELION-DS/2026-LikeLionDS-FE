import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

import * as N from "@styles/WriteAnswerStyle";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

import Step3 from "@/assets/icons/Step3.svg";
import Up from "@/assets/icons/Up.svg";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function WriteAnswer() {
  const nextButtonRef = useRef(null);
  const [isNextVisible, setIsNextVisible] = useState(true);

  const [common1, setCommon1] = useState("");
  const [common2, setCommon2] = useState("");
  const [part1, setPart1] = useState("");
  const [part2, setPart2] = useState("");
  const [TryJava, setTryJava] = useState(null);

  const [showFab, setShowFab] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const devState = { fromResult: true };
  const { fromResult } = location.state ?? devState;

  const isEdit = location.state?.isEdit ?? false;
  const formData = location.state?.formData ?? null;

  const part = formData?.part;

  const isPM = part === "PM";
  const isFE = part === "FE";
  const isBE = part === "BE";

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

  useEffect(() => {
    if (location.state?.isEdit && location.state?.answerData) {
      const data = location.state.answerData;

      setCommon1(data.common1 ?? "");
      setCommon2(data.common2 ?? "");
      setPart1(data.part1 ?? "");
      setPart2(data.part2 ?? "");
      setTryJava(data.TryJava ?? null);
    }
  }, [location.state]);

  const isCommonValid = common1.trim() !== "" && common2.trim() !== "";

  const isPartValid = (isPM && part1.trim() !== "" && part2.trim() !== "") || isFE || (isBE && TryJava !== null);

  const isFormValid = isCommonValid && isPartValid;

  const handleTryJava = (value) => {
    setTryJava(value);
  };

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

  const goConfirm = () => {
    if (!isFormValid) return;

    const partAnswers = (() => {
      if (isBE) {
        return [
          {
            question_number: 1,
            answer: TryJava === "yes" ? "있다" : "없다",
          },
        ];
      }
      if (isFE) {
        return [];
      }
      // PM
      return [
        { question_number: 1, answer: part1 },
        { question_number: 2, answer: part2 },
      ];
    })();

    const payload = {
      name: formData?.name,
      phone_number: formData?.phone_number,
      email: formData?.email,
      student_id: formData?.student_id,
      department: formData?.department,
      academic_status: formData?.academic_status,
      part: formData?.part,

      common_answers: [
        { question_number: 1, answer: common1 },
        { question_number: 2, answer: common2 },
      ],
      part_answers: partAnswers,
    };

    navigate("/writeconfirm", {
      state: {
        isEdit,
        fromResult,
        formData,
        answerData: { common1, common2, part1, part2, TryJava },
        payload,
      },
    });
  };

  return (
    <>
      <Header title="서류 지원서 작성"></Header>
      <N.Space>
        <N.StepGrid>
          <N.StepTitle>STEP 3</N.StepTitle>
          <N.StepText>문항 답변 입력</N.StepText>
          <N.StepIcon src={Step3} alt="단계2" />
        </N.StepGrid>

        <N.FormGrid>
          <N.CommonQGrid>
            <N.QTitle>공통 질문</N.QTitle>
            <N.QBoxG>
              <N.QBox>
                <N.Question>Q1. 질문</N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common1}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.length > 500) value = value.slice(0, 500);
                      setCommon1(value);

                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>{500 - common1.length}</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>
              <N.QBox>
                <N.Question>Q1. 질문</N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common2}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.length > 500) value = value.slice(0, 500);
                      setCommon2(value);

                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>{500 - common2.length}</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>
            </N.QBoxG>
          </N.CommonQGrid>

          {isPM && (
            <N.PartQGrid>
              <N.QTitle>
                <N.PartQ>기획디자인</N.PartQ> 파트별 질문
              </N.QTitle>
              <N.QBoxG>
                <N.QBox>
                  <N.Question>Q1. 질문</N.Question>
                  <N.QInputBox>
                    <N.QInput
                      value={part1}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (value.length > 500) value = value.slice(0, 500);
                        setPart1(value);

                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                      }}
                      placeholder="답변을 작성해 주세요."></N.QInput>
                    <N.TextCount>
                      <N.WriteText>{500 - part1.length}</N.WriteText>/500
                    </N.TextCount>
                  </N.QInputBox>
                </N.QBox>
                <N.QBox>
                  <N.Question>Q1. 질문</N.Question>
                  <N.QInputBox>
                    <N.QInput
                      value={part2}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (value.length > 500) value = value.slice(0, 500);
                        setPart2(value);

                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                      }}
                      placeholder="답변을 작성해 주세요."></N.QInput>
                    <N.TextCount>
                      <N.WriteText>{500 - part2.length}</N.WriteText>/500
                    </N.TextCount>
                  </N.QInputBox>
                </N.QBox>
              </N.QBoxG>
            </N.PartQGrid>
          )}

          {isBE && (
            <N.PartQGrid>
              <N.QTitle>
                <N.PartQ>백엔드</N.PartQ> 파트별 질문
              </N.QTitle>
              <N.QBox>
                <N.Question>자바(Java) 경험 유무</N.Question>
                <N.QEx>있으면 “있다", 없으면 “없다" 버튼을 선택해주세요</N.QEx>
                <N.ButtonGrid>
                  <N.PartQButton $selected={TryJava === "yes"} onClick={() => handleTryJava("yes")}>
                    있다
                  </N.PartQButton>
                  <N.PartQButton $selected={TryJava === "no"} onClick={() => handleTryJava("no")}>
                    없다
                  </N.PartQButton>
                </N.ButtonGrid>
              </N.QBox>
            </N.PartQGrid>
          )}
        </N.FormGrid>

        <N.FixedBox>
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
        </N.FixedBox>

        <N.NextButtonGrid ref={nextButtonRef}>
          <N.NextButton
            disabled={!isFormValid}
            onClick={() => {
              if (!isFormValid) return;
              goConfirm();
            }}>
            {isEdit ? "수정 완료" : "다음으로"}
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer></Footer>
    </>
  );
}

export default WriteAnswer;
