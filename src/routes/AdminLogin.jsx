import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "@styles/AdminLoginStyle";
import { loginAdmin } from "@utils/Admin";

import Header from "@components/Header/HeaderAdmin";

function AdminLogin() {
  // 테스트를 위해 임시로 만든 어드민 로그인 기능
  // utils/Admin 파일 내의 loginAdmin 함수를 가져와서 사용하는 방식
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginAdmin(id, password)) {
      navigate("/admin/menu");
    } else {
      alert("로그인 실패");
    }
  };
  return (
    <>
      <Header title="운영진이신가요" />
      <A.AdminLogin></A.AdminLogin>
      {/* 테스트를 위해 임시로 만든 어드민 로그인 (수정바람)*/}

      <A.Form>
        <A.InputBox>
          <A.InputName>로그인</A.InputName>
          <A.Bar></A.Bar>
          <A.Input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        </A.InputBox>
        <A.InputBox>
          <A.InputName>비밀번호</A.InputName>
          <A.Bar></A.Bar>
          <A.Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </A.InputBox>
        <A.Button
          type="submit"
          onClick={handleLogin}
          style={{
            backgroundColor: id && password ? "#ff7710" : "#FFB175",
          }}>
          로그인
        </A.Button>
      </A.Form>
    </>
  );
}

export default AdminLogin;
