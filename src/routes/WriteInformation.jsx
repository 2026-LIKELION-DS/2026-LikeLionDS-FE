import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as N from "@styles/WriteInformationStyle";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

import Step2 from "@/assets/icons/Step2.svg";

const API_URL = import.meta.env.VITE_API_URL;

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

  const isEdit = Boolean(location.state?.isEdit);
  const initialEditRef = useRef({ name: "", phone: "", email: "" });

  // 이름, 전번 중복
  const [dup, setDup] = useState({
    checked: false,
    isDuplicate: false,
    loading: false,
    error: null,
  });

  // 이메일 중복
  const [mailDup, setMailDup] = useState({
    checked: false,
    isDuplicate: false,
    loading: false,
    error: null,
  });

  const normalizePhone = (v) => v.replace(/[^0-9]/g, "");
  const normalizeEmail = (v) => v.trim();

  const isValidEmail = (v) => {
    const s = normalizeEmail(v);
    if (!s) return false;
    // 공백 없고, @ 앞뒤/도메인 형태만 최소 체크
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  };

  const dupReqIdRef = useRef(0);
  const mailDupReqIdRef = useRef(0);

  const handlePartSelect = (part) => {
    setSelectedPart(part);
  };

  const devState = { fromResult: true };
  const { fromResult } = location.state ?? devState;

  useEffect(() => {
    if (location.state?.isEdit && location.state?.formData) {
      const data = location.state.formData;

      const nextName = data?.name ?? "";
      const nextPhone = data?.phone_number ?? "";
      const nextMail = data?.email ?? "";

      setName(nextName);
      setPhone(nextPhone);
      setMail(nextMail);
      setLesson(data?.department ?? "");
      setStudent(data?.academic_status ?? "");
      setNumber(data?.student_id ?? "");

      const partMapFromServer = {
        PM: "pm",
        FE: "front",
        BE: "back",
      };
      setSelectedPart(partMapFromServer[data?.part] ?? null);

      // 수정 화면에서 기존 값 저장 → 변경된 경우에만 중복 체크
      initialEditRef.current = {
        name: (nextName || "").trim(),
        phone: normalizePhone(nextPhone || ""),
        email: normalizeEmail(nextMail || ""),
      };

      setDup({ checked: false, isDuplicate: false, loading: false, error: null });
      setMailDup({ checked: false, isDuplicate: false, loading: false, error: null });
    }
  }, [location.state]);

  useEffect(() => {
    const trimmedName = name.trim();
    const normalizedPhone = normalizePhone(phone);

    const original = initialEditRef.current;
    const changedInEdit =
      isEdit && (trimmedName !== (original.name ?? "") || normalizedPhone !== (original.phone ?? ""));

    const shouldCheck = !isEdit ? true : changedInEdit;

    // 입력이 덜 된 상태면 리셋
    if (!shouldCheck || trimmedName.length < 2 || !(normalizedPhone.length === 10 || normalizedPhone.length === 11)) {
      setDup({
        checked: false,
        isDuplicate: false,
        loading: false,
        error: null,
      });
      return;
    }

    const currentReqId = ++dupReqIdRef.current;

    const timer = setTimeout(async () => {
      try {
        setDup((prev) => ({ ...prev, loading: true, error: null }));

        const res = await axios.post(`${API_URL}/application/check-duplicate/`, {
          name: trimmedName,
          phone_number: normalizedPhone,
        });

        if (dupReqIdRef.current !== currentReqId) return;

        const isDuplicate = Boolean(res.data?.data?.is_duplicate);

        setDup({
          checked: true,
          isDuplicate,
          loading: false,
          error: null,
        });
      } catch (err) {
        if (dupReqIdRef.current !== currentReqId) return;

        const msg =
          err?.response?.data?.message ||
          err?.response?.data?.error?.message ||
          err?.message ||
          "중복 확인 중 오류가 발생했어요.";

        setDup({
          checked: true,
          isDuplicate: false,
          loading: false,
          error: msg,
        });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [name, phone, isEdit]);

  useEffect(() => {
    const normalized = normalizeEmail(mail);

    const original = initialEditRef.current;
    const changedInEdit = isEdit && normalized !== (original.email ?? "");

    const shouldCheck = !isEdit ? true : changedInEdit;

    // 이메일이 유효하지 않으면 리셋
    if (!shouldCheck || !isValidEmail(normalized)) {
      setMailDup({
        checked: false,
        isDuplicate: false,
        loading: false,
        error: null,
      });
      return;
    }

    const currentReqId = ++mailDupReqIdRef.current;

    const timer = setTimeout(async () => {
      try {
        setMailDup((prev) => ({ ...prev, loading: true, error: null }));

        const res = await axios.post(`${API_URL}/application/check-email/`, {
          email: normalized,
        });

        if (mailDupReqIdRef.current !== currentReqId) return;

        const isDuplicate = Boolean(res.data?.data?.is_duplicate);

        setMailDup({
          checked: true,
          isDuplicate,
          loading: false,
          error: null,
        });
      } catch (err) {
        if (mailDupReqIdRef.current !== currentReqId) return;

        const msg =
          err?.response?.data?.message ||
          err?.response?.data?.error?.message ||
          err?.message ||
          "이메일 중복 확인 중 오류가 발생했어요.";

        setMailDup({
          checked: true,
          isDuplicate: false,
          loading: false,
          error: msg,
        });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [mail, isEdit]);

  const isNamePhoneDuplicateBlocked = dup.checked && (dup.isDuplicate || Boolean(dup.error));
  const isEmailDuplicateBlocked = mailDup.checked && (mailDup.isDuplicate || Boolean(mailDup.error));

  const anyDupLoading = dup.loading || mailDup.loading;

  const isFormValid =
    name.trim() &&
    phone.trim() &&
    mail.trim() &&
    lesson.trim() &&
    number.trim() &&
    student.trim() &&
    selectedPart &&
    !isNamePhoneDuplicateBlocked &&
    !isEmailDuplicateBlocked;

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
            <N.NameInput placeholder="이름을 입력해 주세요" value={name} onChange={(e) => setName(e.target.value)} />
            {dup.checked && dup.isDuplicate && <N.NameEx>*중복된 지원자 입니다</N.NameEx>}
            {dup.checked && !dup.isDuplicate && dup.error && <N.NameEx>*{dup.error}</N.NameEx>}
          </N.Name>

          <N.Phone>
            <N.PhoneText>전화번호</N.PhoneText>
            <N.InputEx>(예: 01012341234)</N.InputEx>
            <N.PhoneInput
              placeholder="‘-’ 없이 전화번호를 입력해 주세요"
              value={phone}
              onChange={(e) => setPhone(normalizePhone(e.target.value))}
            />
            {dup.checked && dup.isDuplicate && <N.NumEx>*중복된 전화번호 입니다</N.NumEx>}
            {dup.checked && !dup.isDuplicate && dup.error && <N.NumEx>*{dup.error}</N.NumEx>}
          </N.Phone>

          <N.Mail>
            <N.MailText>메일</N.MailText>
            <N.InputEx>
              * 입력하신 메일주소로 <N.HlColor>합격자 통보</N.HlColor>가 이루어지며,
              <br />
              &nbsp;&nbsp;사이트 내 <N.HlColor>합격자 조회</N.HlColor>에도 사용됩니다.
              <br />
              &nbsp;&nbsp;<N.HlColor>정확한 주소</N.HlColor>를 입력해주세요.
            </N.InputEx>

            <N.MailInput placeholder="dslions@duksung.ac.kr" value={mail} onChange={(e) => setMail(e.target.value)} />

            {mail && !isValidEmail(mail) && <N.NameEx>*이메일 형식이 올바르지 않아요.</N.NameEx>}
            {mailDup.checked && mailDup.isDuplicate && <N.NameEx>*중복된 이메일 입니다</N.NameEx>}
            {mailDup.checked && !mailDup.isDuplicate && mailDup.error && <N.NameEx>*{mailDup.error}</N.NameEx>}
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
            disabled={!isFormValid || anyDupLoading}
            onClick={() => {
              if (!isFormValid) return;

              const partMapToServer = {
                pm: "PM",
                front: "FE",
                back: "BE",
              };

              const formData = {
                name: name.trim(),
                phone_number: normalizePhone(phone),
                email: normalizeEmail(mail),
                department: lesson.trim(),
                academic_status: student.trim(),
                student_id: number.trim(),
                part: partMapToServer[selectedPart],
              };

              const nextState = {
                isEdit: location.state?.isEdit ?? false,
                formData,
              };

              if (location.state?.isEdit) {
                navigate("/writeconfirm", {
                  state: {
                    ...nextState,
                    answerData: location.state?.answerData,
                    payload: location.state?.payload,
                    fromResult,
                  },
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
            {anyDupLoading ? "중복 확인 중..." : location.state?.isEdit ? "수정 완료" : "다음으로"}
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer />
    </>
  );
}

export default WriteInformation;
