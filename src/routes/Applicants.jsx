import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "@styles/ApplicantsStyle";
import Header from "@components/Header/HeaderApp";
import Error from "@routes/Error";

const REAL_FINAL_RESULT_START = new Date(2026, 2, 7, 12, 0, 0);
// // 최종합격 UI 보고싶으면
// const REAL_FINAL_RESULT_START = new Date(2026, 1, 3, 12, 0, 0);

const getPageMode = () => {
  const now = new Date();

  // const formDeadline = new Date(2026, 1, 19, 18, 0, 0); // 2/19 18:00
  // const firstResultStart = new Date(2026, 1, 25, 12, 0, 0); // 2/25 12:00
  // // const firstResultStart = new Date(2026, 2, 7, 12, 0, 0); // 최종 합격, 3/7 12:00

  // const disabledStart = new Date(2026, 2, 7, 0, 0, 0); // 3/7 00:00
  // const disabledEnd = new Date(2026, 2, 7, 12, 0, 0); // 3/7 12:00
  // const finalEndDate = new Date(2026, 2, 9, 0, 0, 0); // 3/9 00:00

  // QA용 날짜설정
  const formDeadline = new Date(2026, 1, 1, 12, 0, 0); // 2/1 18:00
  const firstResultStart = new Date(2026, 1, 1, 12, 0, 0); // 2/1 12:00

  const disabledStart = new Date(2026, 2, 7, 0, 0, 0); // 3/7 00:00
  const disabledEnd = new Date(2026, 2, 7, 12, 0, 0); // 3/7 12:00
  const finalEndDate = new Date(2026, 2, 11, 0, 0, 0); // 3/11 00:00

  // 접근 불가 기간
  if ((now >= disabledStart && now < disabledEnd) || now >= finalEndDate) {
    return "CLOSED";
  }

  // 지원서 확인
  if (now < formDeadline) {
    return "FORM_CHECK";
  }

  // 합격자 조회
  if (now >= firstResultStart) {
    return "RESULT";
  }

  // 그 외 기간 (2/19 ~ 2/25)
  return "CLOSED";
};

function Applicants() {
  const navigate = useNavigate();

  const [pageMode, setPageMode] = useState(null);
  const [formValue, setFormValue] = useState({
    name: "",
    tel: "",
    email: "",
  });

  useEffect(() => {
    setPageMode(getPageMode());
  }, []);

  // 접근 불가
  if (pageMode === "CLOSED") {
    return <Error />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, tel, email } = formValue;
    if (!name || !tel || !email) {
      alert("이름, 전화번호, 이메일을 모두 입력해주세요.");
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      // 분기가 달라져서 우선 주석 처리
      // const url =
      //   pageMode === "FORM_CHECK"
      //     ? `${API_URL}/application/check-submission/` // 제출 여부 조회 API
      //     : `${API_URL}/check/babylions/`

      // const response = await axios.post(url, {
      //   name,
      //   phone_number: tel,
      //   email,
      // });

      // const data = response.data;

      // if (data.status === "fail") {
      //   alert(data.message);
      //   return;
      // }

      // if (pageMode === "FORM_CHECK") {

      //   const submitted = data?.data?.submitted;

      //   if (submitted === true) {
      //     // 성공 - 제출 시
      //     navigate("/checksubmit", {
      //       state: {
      //         name,
      //         email,
      //         submittedAt: data.data.submitted_at,
      //       },
      //     });
      //   } else {
      //     // 성공 - 미제출 시
      //     navigate("/noexist", {
      //       state: {
      //         name,
      //         email,
      //       },
      //     });
      //   }
      //   return;
      // }

      //지원서 제출여부 확인
      if (pageMode === "FORM_CHECK") {
        const res = await axios.post(
          `${API_URL}/application/check-submission/`,
          {
            name,
            phone_number: tel,
            email,
          }
        );

        const data = res.data;

        if (data.status === "fail") {
          alert(data.message);
          return;
        }

        const submitted = data?.data?.submitted;

        if (submitted === true) {
          // 성공 - 제출 시
          navigate("/checksubmit", {
            state: {
              name,
              email,
              submittedAt: data.data.submitted_at,
            },
          });
        } else {
          // 성공 - 미제출 시
          navigate("/noexist", {
            state: {
              name,
              email,
            },
          });
        }
        return;
      }

      if (pageMode === "RESULT") {
        const now = new Date();

        // 최종 합격 발표 이후면 무조건 result 페이지
        if (now >= REAL_FINAL_RESULT_START) {
          const resultRes = await axios.post(`${API_URL}/check/babylions/`, {
            name,
            phone_number: tel,
            email,
          });

          const resultData = resultRes.data;

          if (resultData.status === "fail") {
            alert(resultData.message);
            return;
          }

          navigate("/result", {
            state: {
              name: resultData.data.name,
              is_passed: resultData.data.is_passed,
              email,
            },
          });

          return;
        }

        //면접 시간 제출 여부 조회
        const submissionRes = await axios.post(
          `${API_URL}/check/submission-check/`,
          { email }
        );

        const submissionData = submissionRes.data;

        if (submissionData.status === "fail") {
          alert(submissionData.message);
          return;
        }

        //면접 시간 제출한 경우 timeDone으로 이동
        if (submissionData.data.submitted === true) {
          navigate("/timedone", {
            state: { email },
          });
          return;
        }

        //면접 시간 제출 안 했으면 기존 합격자 조회 API 호출
        const resultRes = await axios.post(
          `${API_URL}/check/babylions/`,
          {
            name,
            phone_number: tel,
            email,
          }
        );

        const resultData = resultRes.data;

        if (resultData.status === "fail") {
          alert(resultData.message);
          return;
        }

        navigate("/result", {
          state: {
            name: resultData.data.name,
            is_passed: resultData.data.is_passed,
            email,
          },
        });

        return;
      }
    } catch (error) {
      alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const isFormValid = formValue.name && formValue.tel && formValue.email;

  return (
    <>
      <Header />

      <A.Applicants />

      <A.Form onSubmit={handleSubmit}>
        <A.InputBox>
          <A.InputName>이름</A.InputName>
          <A.bar />
          <A.Input type="text" name="name" value={formValue.name} onChange={handleChange} placeholder="김멋사" />
        </A.InputBox>
        <A.InputBox>
          <A.InputName>번호</A.InputName>
          <A.bar />
          <A.Input type="tel" name="tel" value={formValue.tel} onChange={handleChange} placeholder="010-1234-5678" />
        </A.InputBox>
        <A.InputBox>
          <A.InputName>이메일</A.InputName>
          <A.bar />
          <A.Input
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            placeholder="ds14likelion@duksung.ac.kr"
          />
        </A.InputBox>
        <A.Button
          type="submit"
          style={{
            backgroundColor: isFormValid ? "#ff7710" : "#FFB175",
          }}>
          {pageMode === "FORM_CHECK" ? "지원서 확인하러 가기" : "합격자 조회하기"}
        </A.Button>
      </A.Form>
    </>
  );
}

export default Applicants;
