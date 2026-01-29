import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as N from "@styles/WriteInformationStyle";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

import Step2 from "@/assets/icons/Step2.svg";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function WriteInformation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [lesson, setLesson] = useState("");
  const [number, setNumber] = useState("");
  const [student, setStudent] = useState("");
  const [selectedPart, setSelectedPart] = useState(null);

  const handlePartSelect = (part) => {
    setSelectedPart(part);
  };

  const devState = { fromResult: true };
  const { fromResult } = location.state ?? devState;

  useEffect(() => {
    if (location.state?.isEdit && location.state?.formData) {
      const data = location.state.formData;

      setName(data?.name ?? "");
      setPhone(data?.phone_number ?? "");
      setMail(data?.email ?? "");
      setLesson(data?.department ?? "");
      setStudent(data?.academic_status ?? "");
      setNumber(data?.student_id ?? "");

      const partMapFromServer = {
        PM: "pm",
        FE: "front",
        BE: "back",
      };
      setSelectedPart(partMapFromServer[data?.part] ?? null);
    }
  }, [location.state]);

  const isFormValid =
    name.trim() && phone.trim() && mail.trim() && lesson.trim() && number.trim() && student.trim() && selectedPart;

  return (
    <>
      <Header title="서류 지원서 작성" />
      <N.Space>
        <N.StepGrid>
          <N.StepTitle>STEP 2</N.StepTitle>
          <N.StepText>인적사항 입력</N.StepText>
          <N.StepIcon src={Step2} alt="단계1" />
        </N.StepGrid>
        <N.FormGrid>
          <N.Name>
            <N.NameText>이름</N.NameText>
            <N.NameInput
              placeholder="이름을 입력해 주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}></N.NameInput>
          </N.Name>
          <N.Phone>
            <N.PhoneText>전화번호</N.PhoneText>
            <N.InputEx>(예: 01012341234)</N.InputEx>
            <N.PhoneInput
              placeholder="‘-’ 없이 전화번호를 입력해 주세요"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}></N.PhoneInput>
          </N.Phone>
          <N.Mail>
            <N.MailText>메일</N.MailText>
            <N.InputEx>
              *입력하신 메일주소로 <N.HlColor>합격자 통보</N.HlColor>가 이루어집니다.
              <br />
              <N.HlColor>정확한 주소</N.HlColor>를 입력해주세요.
            </N.InputEx>
            <N.MailInput
              placeholder="dslions@duksung.ac.kr"
              value={mail}
              onChange={(e) => setMail(e.target.value)}></N.MailInput>
          </N.Mail>
          <N.Lesson>
            <N.LessonText>학과</N.LessonText>
            <N.InputEx>
              - 1학년
              <br />
              본인이 속한 단과대 이름을 작성해주세요. (가상현실융합학과, 데이터사이언스학과, AI신약학과는 학과로
              작성해주세요.)
              <br />
              (예: 과학기술대학)
              <br />
            </N.InputEx>
            <N.InputEx>
              - 2학년 이상
              <br /> 복수전공 및 2전공일 경우 본전공/복수전공(혹은 부전공, 2전공)과 같이 작성해주세요. <br />
              (예: 시각디자인전공/문화인류학전공)
            </N.InputEx>
            <N.LessonInput
              placeholder="학과를 작성해 주세요"
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}></N.LessonInput>
          </N.Lesson>
          <N.Number>
            <N.NumberText>학번</N.NumberText>
            <N.InputEx>(예: 20260101)</N.InputEx>
            <N.NumberInput
              placeholder="학번을 작성해 주세요"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </N.Number>
          <N.Lesson>
            <N.LessonText>학년/재학 여부</N.LessonText>
            <N.InputEx>
              2026학년도 1학기 기준으로 작성해 주세요.
              <br />
              (예: 3학년/재학)
              <br />
            </N.InputEx>
            <N.InputEx>
              * 휴학생의 경우, 수료를 마친 학기 수를 입력해주세요
              <br />
              예) 2학년 2학기를 마치고 휴학한 경우 : 4학기/휴학
            </N.InputEx>
            <N.LessonInput
              placeholder="학년/재학 여부를 작성해 주세요"
              value={student}
              onChange={(e) => setStudent(e.target.value)}></N.LessonInput>
          </N.Lesson>
          <N.PartGrid>
            <N.PartText>지원하는 파트</N.PartText>
            <N.PartCon>
              <N.PartButton $selected={selectedPart === "pm"} onClick={() => handlePartSelect("pm")}>
                기획/디자인
              </N.PartButton>
              <N.PartButton $selected={selectedPart === "front"} onClick={() => handlePartSelect("front")}>
                프론트엔드
              </N.PartButton>
              <N.PartButton $selected={selectedPart === "back"} onClick={() => handlePartSelect("back")}>
                백엔드
              </N.PartButton>
            </N.PartCon>
          </N.PartGrid>
        </N.FormGrid>
        <N.NextButtonGrid>
          <N.NextButton
            disabled={!isFormValid}
            onClick={() => {
              const partMapToServer = {
                pm: "PM",
                front: "FE",
                back: "BE",
              };

              const formData = {
                name,
                phone_number: phone,
                email: mail,
                department: lesson,
                academic_status: student,
                student_id: number,
                part: partMapToServer[selectedPart],
              };

              const nextState = {
                isEdit: location.state?.isEdit ?? false,
                formData,
              };

              if (location.state?.isEdit) {
                navigate("/WriteConfirm", {
                  state: nextState,
                });
              } else {
                navigate("/writeanswer", {
                  state: {
                    ...nextState,
                    fromResult,
                  },
                });
              }
            }}>
            {location.state?.isEdit ? "수정 완료" : "다음으로"}
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer />
    </>
  );
}

export default WriteInformation;
