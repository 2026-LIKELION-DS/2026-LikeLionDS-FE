import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/WriteInformationStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

import Step1 from "@/assets/icons/Step1.svg";

function WriteInformation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [lesson, setLesson] = useState("");
  const [number, setNumber] = useState("");
  const [selectedPart, setSelectedPart] = useState(null);

  const handlePartSelect = (part) => {
    setSelectedPart(part);
  };

  const devState = {
    fromResult: true,
  };

  // 연동시 삭제
  const { fromResult } = location.state ?? devState;

  const isFormValid = name.trim() && phone.trim() && mail.trim() && lesson.trim() && number.trim() && selectedPart;

  return (
    <>
      <Header title="인적사항 작성" />
      <N.Space>
        <N.StepGrid>
          <N.StepTitle>STEP 1</N.StepTitle>
          <N.StepText>인적사항 입력</N.StepText>
          <N.StepIcon src={Step1} alt="단계1" />
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
              1, 2전공 구분은 ,로 구분하여 작성해주세요.
              <br />
              (예: 시각디자인전공, 문화인류학전공)
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
            onClick={() =>
              navigate("/WriteAnswer", {
                state: {
                  name,
                  phone,
                  mail,
                  lesson,
                  number,
                  part: selectedPart,
                },
              })
            }>
            다음으로
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer />
    </>
  );
}

export default WriteInformation;
