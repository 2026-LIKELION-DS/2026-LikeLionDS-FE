import React from "react";
import * as A from "@styles/AdminMenuStyle";
import { useNavigate } from "react-router-dom";
import Header from "@components/Header/HeaderAdmin";

function AdminMenu() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="운영진이시네요" />
      <A.AdminMenu>
        {" "}
        <A.Menu onClick={() => navigate("/admin/notice/new")}>Q&A 답변하기</A.Menu>
        <A.Menu onClick={() => navigate("/admin/notice/:id/edit")}>공지사항 글쓰기</A.Menu>
      </A.AdminMenu>
    </>
  );
}

export default AdminMenu;
