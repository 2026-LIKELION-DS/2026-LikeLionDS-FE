import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/WriteConfirmStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

import Step4 from "@/assets/icons/Step4.svg";
import Up from "@/assets/icons/Up.svg";

function WriteConfirm() {
  const navigate = useNavigate();
  const [showFab, setShowFab] = useState(false);
  const location = useLocation();
  const answerData = location.state?.answerData;

  const isEdit = location.state?.isEdit ?? false;
  const formData = location.state?.formData ?? {};

  const [form, setForm] = useState(formData);

  //수정으로 이동
  useEffect(() => {
    if (location.state?.isEdit) {
      setForm(location.state.formData);
    }
  }, []);

  const handleEdit = () => {
    navigate("/WriteInformation", {
      state: {
        isEdit: true,
        formData: form,
      },
    });
  };

  useEffect(() => {
    if (isEdit && location.state?.answerData) {
      const data = location.state.answerData;
      setCommon1(data.common1);
      setCommon2(data.common2);
      setPart1(data.part1);
      setPart2(data.part2);
      setTryJava(data.TryJava);
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
              {/* 연동시 실제 state값 넣어주세요 */}
              <N.InfoEdit
                onClick={() => {
                  navigate("/WriteInformation", {
                    state: {
                      isEdit: true,
                      formData: {
                        name: "소랑이",
                        phone: "010-0000-0000",
                        email: "abc@duksung.ac.kr",
                        // 답변들도 같이 넣기
                      },
                    },
                  });
                }}>
                수정하기
              </N.InfoEdit>
            </N.FormTitleBox>
            <N.InfoBox>
              <N.InfoNameText>이름</N.InfoNameText>
              <N.InfoName>소랑이</N.InfoName>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoNameText>전화번호</N.InfoNameText>
              <N.InfoPhone>010-0000-0000</N.InfoPhone>
            </N.InfoBox>
            <N.InfoBox>
              <N.InfoNameText>메일주소</N.InfoNameText>
              <N.InfoMail>abc@duksung.ac.kr</N.InfoMail>
            </N.InfoBox>
          </N.InformationFormGrid>
          <N.AnswerFormGrid>
            <N.FormTitleBox>
              <N.InfoTitle>문항 답변 내역</N.InfoTitle>
              <N.AnsEdit
                onClick={() => {
                  navigate("/WriteAnswer", {
                    state: {
                      isEdit: true,
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
                <N.CoQA>
                  사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용
                </N.CoQA>
              </N.CoQABox>
              <N.CoQABox>
                <N.CoQ>Q1. 질문 어쩌고저쩌고</N.CoQ>
                <N.CoQA>
                  사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용 사용자가 작성한내용 사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용 사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용 사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용 사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가 작성한내용사용자가
                  작성한내용사용자가 작성한내용사용자가 작성한내용
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
              if (isEdit) {
                navigate("/FormDone", { state: { updated: true } });
              } else {
                navigate("/FormDone", { state: { submitted: true } });
              }
            }}>
            {isEdit ? "수정 완료" : "제출하기"}
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer />
    </>
  );
}

export default WriteConfirm;
