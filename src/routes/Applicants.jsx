import React, { useEffect, useState } from "react";
import * as A from "@styles/ApplicantsStyle";

import Header from "@components/Header/HeaderApp";

function Applicants() {
  const [formValue, setFormValue] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValue((prevValue) => {
      const { name, value } = e.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Header />
      <A.Applicants></A.Applicants>
      <A.form>
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
      </A.form>
    </>
  );
}

export default Applicants;
