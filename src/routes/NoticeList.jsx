import React from "react";
import { useNavigate } from "react-router-dom";
import * as N from "@styles/NoticeListStyle";
import { isAdminLoggedIn } from "@utils/Admin";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

function NoticeList() {
  // utils/Admin 파일 내의 isAdminLoggedIn 함수를 가져와서 로그인된 상태인지 확인
  // 어드민 로그인 상태이면 true를 반환하니까 그에 맞게 조건문을 사용해서 어드민 전용 공지 작성 버튼 표시하기
  // 어드민 로그인 상태에 따라 헤더 문구도 수정
  const navigate = useNavigate();

  const handleNewNotice = () => {
    if (isAdminLoggedIn()) {
      navigate("/admin/notice/new");
    }
  };
  return (
    <>
      <Header title="공지사항" />
      <N.NoticeList>공지사항 목록 페이지</N.NoticeList>
      {/* 테스트를 위해 임시로 만든 어드민 전용 버튼(수정바람)*/}
      {isAdminLoggedIn() && <button onClick={handleNewNotice}>새 공지 작성</button>}
      <Footer />
    </>
  );
}

export default NoticeList;
