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
      <A.AdminLogin>어드민 로그인 페이지</A.AdminLogin>
      {/* 테스트를 위해 임시로 만든 어드민 로그인 (수정바람)*/}
      <div>
        <h1>로그인</h1>
        <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </>
  );
}

export default AdminLogin;
