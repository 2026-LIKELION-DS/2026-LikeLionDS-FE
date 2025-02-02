import React from "react";
import * as A from "@styles/AdminMenuStyle";
import { useNavigate } from "react-router-dom";
import Header from "@components/Header/HeaderAdmin";

function AdminMenu() {
  const navigate = useNavigate();
  const ADMIN_QNA = import.meta.env.VITE_ADMIN_QNA;
  const ADMIN_NOTI = import.meta.env.VITE_ADMIN_NOTI;

  return (
    <>
      <Header title="운영진이시네요" />
      <A.AdminMenu>
        <A.Menu onClick={() => navigate(`${ADMIN_QNA}`)}>Q&A 답변하기</A.Menu>
        <A.Menu onClick={() => navigate(`${ADMIN_NOTI}`)}>공지사항 글쓰기</A.Menu>
      </A.AdminMenu>
    </>
  );
}

export default AdminMenu;
