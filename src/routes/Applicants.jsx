import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "@styles/ApplicantsStyle";
import Header from "@components/Header/HeaderApp";
import Error from "@routes/Error";

function Applicants() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const [isAccessible, setIsAccessible] = useState(false);

  useEffect(() => {
    const checkAccessTime = () => {
      const now = new Date();
      const accessTime = new Date(now.getFullYear(), now.getMonth(), 26, 12, 0, 0);
  
      if (now >= accessTime) {
        setIsAccessible(true);
      } else {
        setIsAccessible(false);
      }
    };

    checkAccessTime();
  }, []);

  if (!isAccessible) {
    return <Error />;
  }

  const handleChange = (e) => {
    setFormValue((prevValue) => {
      const { name, value } = e.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
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

      const response = await axios.post(`${API_URL}/check/babylions/`, {
        name,
        phone_number: tel,
        email,
      });

      const data = response.data;

      if (data.status === "fail") {
        alert(data.message);
      } else if (data.status === "success") {
        // 성공하면 특정 페이지로 이동
        navigate("/result", {
          state: { name: data.data.name, is_passed: data.data.is_passed },
        });
      }
    } catch (error) {
      alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };
  return (
    <>
      <Header />
      <A.Applicants></A.Applicants>
      <A.Form onSubmit={handleSubmit}>
        <A.InputBox>
          <A.InputName>이름</A.InputName>
          <A.bar></A.bar>
          <A.Input type="text" name="name" value={formValue.name} onChange={handleChange} placeholder="김멋사" />
        </A.InputBox>
        <A.InputBox>
          <A.InputName>번호</A.InputName>
          <A.bar></A.bar>
          <A.Input type="tel" name="tel" value={formValue.tel} onChange={handleChange} placeholder="010-1234-5678" />
        </A.InputBox>
        <A.InputBox>
          <A.InputName>이메일</A.InputName>
          <A.bar></A.bar>
          <A.Input
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            placeholder="ds13likelion@duksung.ac.kr"
          />
        </A.InputBox>
        <A.Button
          type="submit"
          style={{
            backgroundColor: formValue.name && formValue.email && formValue.tel ? "#ff7710" : "#FFB175",
          }}>
          합격자 조회하기
        </A.Button>
      </A.Form>
    </>
  );
}

export default Applicants;
