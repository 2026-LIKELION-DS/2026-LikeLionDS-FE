import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

import * as N from "@styles/WriteAnswerStyle";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

import Step3 from "@/assets/icons/Step3.svg";
import Up from "@/assets/icons/Up.svg";
import { a } from "framer-motion/client";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function WriteAnswer() {
  const nextButtonRef = useRef(null);
  const [isNextVisible, setIsNextVisible] = useState(true);

  // 공통 질문
  const [common1, setCommon1] = useState("");
  const [common2, setCommon2] = useState("");
  const [common3, setCommon3] = useState("");
  const [common4, setCommon4] = useState("");
  const [common5, setCommon5] = useState("");
  const [common6, setCommon6] = useState("");
  const [common7, setCommon7] = useState("");

  // 파트별 질문
  //PD
  const [part1, setPart1] = useState("");
  const [part2, setPart2] = useState("");
  const [part3, setPart3] = useState("");
  const [part4, setPart4] = useState("");

  //BE
  const [TryJava, setTryJava] = useState(null);
  const [part5, setPart5] = useState("");

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
      setCommon3(data.common3 ?? "");
      setCommon4(data.common4 ?? "");
      setCommon5(data.common5 ?? "");
      setCommon6(data.common6 ?? "");
      setCommon7(data.common7 ?? "");

      setPart1(data.part1 ?? "");
      setPart2(data.part2 ?? "");
      setPart3(data.part3 ?? "");
      setPart4(data.part4 ?? "");

      setTryJava(data.TryJava ?? null);
      setPart5(data.part5 ?? "");
    }
  }, [location.state]);

  const isCommonValid =
    common1.trim() !== "" &&
    common2.trim() !== "" &&
    common3.trim() !== "" &&
    common4.trim() !== "" &&
    common5.trim() !== "" &&
    common6.trim() !== "" &&
    common7.trim() !== "";

  const isPartValid =
    (isPM && part1.trim() !== "" && part2.trim() !== "" && part3.trim() !== "") ||
    isFE ||
    (isBE && TryJava !== null && part5.trim() !== "");

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
          {
            question_number: 2,
            answer: part5,
          },
        ];
      }
      if (isFE) {
        return [];
      }
      // PM
      const pmAnswers = [
        { question_number: 1, answer: part1 },
        { question_number: 2, answer: part2 },
        { question_number: 3, answer: part3 },
      ];

      if ((part4 ?? "").trim() !== "") {
        pmAnswers.push({ question_number: 4, answer: part4 });
      }

      return pmAnswers;
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
        { question_number: 3, answer: common3 },
        { question_number: 4, answer: common4 },
        { question_number: 5, answer: common5 },
        { question_number: 6, answer: common6 },
        { question_number: 7, answer: common7 },
      ],
      part_answers: partAnswers,
    };

    navigate("/writeconfirm", {
      state: {
        isEdit,
        fromResult,
        formData,
        answerData: {
          common1,
          common2,
          common3,
          common4,
          common5,
          common6,
          common7,
          part1,
          part2,
          part3,
          part4,
          TryJava,
          part5,
        },
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
                <N.Question>
                  Q1. 다양한 IT 동아리 중에서 멋쟁이사자처럼 대학 14기를 선택하고 지원하시게 된 이유를 작성해 주세요.
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      textAlign: "right",
                    }}>
                    (500자 이내)
                  </span>
                </N.Question>
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
                <N.Question>
                  Q2. 멋쟁이사자처럼 대학은 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 본인이 가장 중요하다고
                  생각하는 원활한 협업을 위한 태도가 무엇인지 작성해 주세요.
                  <br />
                  또한, 본인이 해당 태도를 갖추고 있다고 판단하는 근거를 경험을 통해 설명해 주세요.
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      textAlign: "right",
                    }}>
                    (500자 이내)
                  </span>
                </N.Question>
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

              <N.QBox>
                <N.Question>
                  Q3. 협업 과정에서 팀원들과 갈등을 겪었던 경험이 있나요? 팀원과의 갈등을 어떻게 극복했는지, 그 경험을
                  통해 본인이 깨닫게 된 점은 무엇인지 작성해 주세요.
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      textAlign: "right",
                    }}>
                    (500자 이내)
                  </span>
                </N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common3}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.length > 500) value = value.slice(0, 500);
                      setCommon3(value);

                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>{500 - common3.length}</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>

              <N.QBox>
                <N.Question>
                  Q4. 멋쟁이사자처럼 대학은 최소 주 2회 모임을 비롯해 많은 시간 투자를 권장합니다. 활동 기간동안 얼마나
                  열정적으로, 매주 얼마만큼의 시간을 할애하실 수 있는지 작성해 주세요.
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      textAlign: "right",
                    }}>
                    (300자 이내)
                  </span>
                </N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common4}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.length > 300) value = value.slice(0, 300);
                      setCommon4(value);

                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>{300 - common4.length}</N.WriteText>/300
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>

              <N.QBox>
                <N.Question>
                  Q5. 2026년도에 멋쟁이사자처럼 이외에 참여하는(또는 참여 계획이 있는) 활동이 있나요? 만약 있다면 어떻게
                  병행할지 계획을 작성해 주세요. 없다면 '없음'이라고 작성해 주세요.
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      textAlign: "right",
                    }}>
                    (200자 이내)
                  </span>
                </N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common5}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.length > 200) value = value.slice(0, 200);
                      setCommon5(value);

                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>
                      <N.WriteText>{200 - common5.length}</N.WriteText>/200
                    </N.WriteText>
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>

              <N.QBox>
                <N.Question>
                  Q6. 본인이 열정을 가지고 깊게 몰입하여 목표했던 것을 성취한 경험에 대해서 최대한 자세히 작성해 주세요.
                  개발 관련 경험이 아니어도 괜찮습니다.
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      textAlign: "right",
                    }}>
                    (500자 이내)
                  </span>
                </N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common6}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.length > 500) value = value.slice(0, 500);
                      setCommon6(value);

                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>{500 - common6.length}</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>

              <N.QBox>
                <N.Question>
                  Q7. 선택한 파트로 지원한 이유와 해당 파트를 통해 어떠한 성장을 희망하시는지 작성해 주세요.
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      display: "block",
                      textAlign: "right",
                    }}>
                    (500자 이내)
                  </span>
                </N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common7}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.length > 500) value = value.slice(0, 500);
                      setCommon7(value);

                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>{500 - common7.length}</N.WriteText>/500
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
                  <N.Question>
                    Q1. 인상 깊었던 서비스 하나를 선정하여 간단히 소개하고, 해당 서비스의 장점과 개선이 필요하다고
                    생각한 점을 기획디자인 관점에서 작성해 주세요.
                    <br />
                    <span
                      style={{
                        fontSize: "12px",
                        display: "block",
                        textAlign: "right",
                      }}>
                      (500자 이내)
                    </span>
                  </N.Question>
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
                  <N.Question>
                    Q2. 본인이 생각하고 있는 진로 또는 직무는 무엇인가요? 아직 구체적으로 정해지지 않았다면 생각해본 적
                    있는 분야를 작성해 주세요.
                  </N.Question>
                  <N.QInputBox>
                    <N.QInput
                      value={part2}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPart2(value);

                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                      }}
                      placeholder="답변을 작성해 주세요."></N.QInput>
                  </N.QInputBox>
                </N.QBox>

                <N.QBox>
                  <N.Question>
                    Q3. 1년간의 멋쟁이사자처럼 활동을 통해 얻은 지식과 경험을 바탕으로, 구현해 보고 싶은 서비스가 있다면
                    간단하게 작성해주세요.
                  </N.Question>
                  <N.QInputBox>
                    <N.QInput
                      value={part3}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPart3(value);

                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                      }}
                      placeholder="답변을 작성해 주세요."></N.QInput>
                  </N.QInputBox>
                </N.QBox>

                <N.QBox>
                  <N.Question>
                    Q4. 사용할 수 있는 디자인 툴이 있다면 작성해 주세요. (선택)
                    <br />
                    <span
                      style={{
                        fontSize: "12px",
                        display: "block",
                        textAlign: "right",
                      }}>
                      (예: Figma, Adobe XD, Adobe Illustrator 등)
                    </span>
                  </N.Question>
                  <N.QInputBox>
                    <N.QInput
                      value={part4}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPart4(value);

                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                      }}
                      placeholder="답변을 작성해 주세요."></N.QInput>
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
              <N.QBoxG>
                <N.QBox>
                  <N.Question>Q1. 자바(Java) 경험 유무</N.Question>
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

                <N.QBox>
                  <N.Question>
                    Q2. Python 공부 경험에 대해 작성해 주세요. 공부하는 과정에서 어려웠던 점이나 본인만의 공부 방법 등에
                    대해 알려주세요. 만약 공부 경험이 없다면, 세션을 진행하기 전 Python 학습 계획에 대해 알려주세요.
                    <br />
                    <span
                      style={{
                        fontSize: "12px",
                        display: "block",
                        textAlign: "right",
                      }}>
                      (200자 이내)
                    </span>
                  </N.Question>
                  <N.QInputBox>
                    <N.QInput
                      value={part5}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (value.length > 200) value = value.slice(0, 200);
                        setPart5(value);

                        e.target.style.height = "auto";
                        e.target.style.height = e.target.scrollHeight + "px";
                      }}
                      placeholder="답변을 작성해 주세요."></N.QInput>
                    <N.TextCount>
                      <N.WriteText>
                        <N.WriteText>{200 - part5.length}</N.WriteText>/200
                      </N.WriteText>
                    </N.TextCount>
                  </N.QInputBox>
                </N.QBox>
              </N.QBoxG>
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
