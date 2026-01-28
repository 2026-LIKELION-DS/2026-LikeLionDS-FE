import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/WriteAnswerStyle";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

import Step3 from "@/assets/icons/Step3.svg";
import Up from "@/assets/icons/Up.svg";

function WriteAnswer() {
  const [common1, setCommon1] = useState("");
  const [common2, setCommon2] = useState("");
  const [part1, setPart1] = useState("");
  const [part2, setPart2] = useState("");
  const [TryJava, setTryJava] = useState<"yes" | "no" | null>(null);
  const [showFab, setShowFab] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isEdit = location.state?.isEdit;

  useEffect(() => {
    if (location.state?.isEdit) {
      const data = location.state.answerData;

      setCommon1(data.common1);
      setCommon2(data.common2);
      setPart1(data.part1);
      setPart2(data.part2);
      setTryJava(data.TryJava);
    }
  }, [location.state]);

  const isFormValid =
    common1.trim() !== "" && common2.trim() !== "" && part1.trim() !== "" && part2.trim() !== "" && TryJava !== null;

  const handleTryJava = (value: "yes" | "no") => {
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
                      setCommon1(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>500</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>
              <N.QBox>
                <N.Question>Q1. 질문</N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={common2}
                    onChange={(e) => {
                      setCommon2(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>500</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>
            </N.QBoxG>
          </N.CommonQGrid>
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
                      setPart1(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>500</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>
              <N.QBox>
                <N.Question>Q1. 질문</N.Question>
                <N.QInputBox>
                  <N.QInput
                    value={part2}
                    onChange={(e) => {
                      setPart2(e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    placeholder="답변을 작성해 주세요."></N.QInput>
                  <N.TextCount>
                    <N.WriteText>500</N.WriteText>/500
                  </N.TextCount>
                </N.QInputBox>
              </N.QBox>
            </N.QBoxG>
          </N.PartQGrid>
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
            disabled={!isFormValid}
            onClick={() => {
              if (!isFormValid) return;
              if (isEdit) {
                navigate("/WriteConfirm", {
                  state: {
                    isEdit: true,
                    answerData: {
                      common1,
                      common2,
                      part1,
                      part2,
                      TryJava,
                    },
                  },
                });
              } else {
                navigate("/WriteConfirm", {
                  state: {
                    isEdit: false,
                    answerData: {
                      common1,
                      common2,
                      part1,
                      part2,
                      TryJava,
                    },
                  },
                });
              }
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
