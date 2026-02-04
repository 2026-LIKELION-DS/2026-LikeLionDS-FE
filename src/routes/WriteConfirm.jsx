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
  const answerData = location.state?.answerData ?? {};
  const payload = location.state?.payload ?? null;

  const [form, setForm] = useState(formData);

  const currentPart = form?.part ?? payload?.part ?? formData?.part;

  const isPD = currentPart === "PD" || currentPart === "PM";
  const isBE = currentPart === "BE";

  useEffect(() => {
    if (!nextButtonRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNextVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.3,
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

    const cleanedPayload = {
      ...fixedPayload,
      part_answers: (fixedPayload.part_answers ?? []).filter(
        (a) => typeof a?.answer === "string" && a.answer.trim() !== "",
      ),
      common_answers: (fixedPayload.common_answers ?? []).filter(
        (a) => typeof a?.answer === "string" && a.answer.trim() !== "",
      ),
    };

    await axios.post(`${API_URL}/application/`, cleanedPayload);
    navigate("/applicationformdone", { replace: true });
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
                <N.CoQ>
                  Q1. 다양한 IT 동아리 중에서 멋쟁이사자처럼 대학 14기를 선택하고 지원하시게 된 이유를 작성해 주세요.
                </N.CoQ>
                <N.CoQA>{answerData?.common1 ?? ""}</N.CoQA>
              </N.CoQABox>

              <N.CoQABox>
                <N.CoQ>
                  Q2. 멋쟁이사자처럼 대학은 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 본인이 가장 중요하다고
                  생각하는 원활한 협업을 위한 태도가 무엇인지 작성해 주세요.
                  <br />
                  또한, 본인이 해당 태도를 갖추고 있다고 판단하는 근거를 경험을 통해 설명해 주세요.
                </N.CoQ>
                <N.CoQA>{answerData?.common2 ?? ""}</N.CoQA>
              </N.CoQABox>

              <N.CoQABox>
                <N.CoQ>
                  Q3. 협업 과정에서 팀원들과 갈등을 겪었던 경험이 있나요? 팀원과의 갈등을 어떻게 극복했는지, 그 경험을
                  통해 본인이 깨닫게 된 점은 무엇인지 작성해 주세요.
                </N.CoQ>
                <N.CoQA>{answerData?.common3 ?? ""}</N.CoQA>
              </N.CoQABox>

              <N.CoQABox>
                <N.CoQ>
                  Q4. 멋쟁이사자처럼 대학은 최소 주 2회 모임을 비롯해 많은 시간 투자를 권장합니다. 활동 기간동안 얼마나
                  열정적으로, 매주 얼마만큼의 시간을 할애하실 수 있는지 작성해 주세요.
                </N.CoQ>
                <N.CoQA>{answerData?.common4 ?? ""}</N.CoQA>
              </N.CoQABox>

              <N.CoQABox>
                <N.CoQ>
                  Q5. 2026년도에 멋쟁이사자처럼 이외에 참여하는(또는 참여 계획이 있는) 활동이 있나요? 만약 있다면 어떻게
                  병행할지 계획을 작성해 주세요. 없다면 '없음'이라고 작성해 주세요.
                </N.CoQ>
                <N.CoQA>{answerData?.common5 ?? ""}</N.CoQA>
              </N.CoQABox>

              <N.CoQABox>
                <N.CoQ>
                  Q6. 본인이 열정을 가지고 깊게 몰입하여 목표했던 것을 성취한 경험에 대해서 최대한 자세히 작성해 주세요.
                  개발 관련 경험이 아니어도 괜찮습니다.
                </N.CoQ>
                <N.CoQA>{answerData?.common6 ?? ""}</N.CoQA>
              </N.CoQABox>

              <N.CoQABox>
                <N.CoQ>
                  Q7. 선택한 파트로 지원한 이유와 해당 파트를 통해 어떠한 성장을 희망하시는지 작성해 주세요.
                </N.CoQ>
                <N.CoQA>{answerData?.common7 ?? ""}</N.CoQA>
              </N.CoQABox>
            </N.CommonPartBox>

            {isPD && (
              <N.CommonPartBox>
                <N.InfoTitle>기획/디자인 파트별 질문</N.InfoTitle>
                <N.CoQABox>
                  <N.CoQ>
                    Q1. 인상 깊었던 서비스 하나를 선정하여 간단히 소개하고, 해당 서비스의 장점과 개선이 필요하다고
                    생각한 점을 기획디자인 관점에서 작성해 주세요.
                  </N.CoQ>
                  <N.CoQA>{answerData?.part1 ?? ""}</N.CoQA>
                </N.CoQABox>

                <N.CoQABox>
                  <N.CoQ>
                    Q2. 본인이 생각하고 있는 진로 또는 직무는 무엇인가요? 아직 구체적으로 정해지지 않았다면 생각해본 적
                    있는 분야를 작성해 주세요.
                  </N.CoQ>
                  <N.CoQA>{answerData?.part2 ?? ""}</N.CoQA>
                </N.CoQABox>

                <N.CoQABox>
                  <N.CoQ>
                    Q3. 1년간의 멋쟁이사자처럼 활동을 통해 얻은 지식과 경험을 바탕으로, 구현해 보고 싶은 서비스가 있다면
                    간단하게 작성해주세요.
                  </N.CoQ>
                  <N.CoQA>{answerData?.part3 ?? ""}</N.CoQA>
                </N.CoQABox>

                <N.CoQABox>
                  <N.CoQ> Q4. 사용할 수 있는 디자인 툴이 있다면 작성해 주세요. (선택)</N.CoQ>
                  <N.CoQA>{answerData?.part4 ?? ""}</N.CoQA>
                </N.CoQABox>
              </N.CommonPartBox>
            )}

            {isBE && (
              <N.CommonPartBox>
                <N.InfoTitle>백엔드 파트별 질문</N.InfoTitle>
                <N.CoQABox>
                  <N.CoQ>Q1. 자바(Java) 경험 유무</N.CoQ>
                  <N.CoQA>{answerData?.TryJava === "yes" ? "있다" : "없다"}</N.CoQA>
                </N.CoQABox>

                <N.CoQABox>
                  <N.CoQ>
                    Q2. Python 공부 경험에 대해 작성해 주세요. 공부하는 과정에서 어려웠던 점이나 본인만의 공부 방법 등에
                    대해 알려주세요. 만약 공부 경험이 없다면, 세션을 진행하기 전 Python 학습 계획에 대해 알려주세요.
                  </N.CoQ>
                  <N.CoQA>{answerData?.part5 ?? ""}</N.CoQA>
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
