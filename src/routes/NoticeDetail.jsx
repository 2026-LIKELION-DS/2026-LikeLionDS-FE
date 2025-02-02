import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as N from "@styles/NoticeDetailStyle";
import { isAdminLoggedIn } from "@utils/Admin";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

function NoticeDetail() {
  // utils/Admin 파일 내의 isAdminLoggedIn 함수를 가져와서 로그인된 상태인지 확인
  // 어드민 로그인 상태이면 true를 반환하니까 그에 맞게 조건문을 사용해서 어드민 전용 공지 수정/삭제 버튼 표시하기
  // 어드민 로그인 상태에 따라 헤더 문구도 수정
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = () => {
    if (isAdminLoggedIn()) {
      navigate(`/admin/notice/${id}/edit`);
    }
  };

  return (
    <>
      <Header title="공지사항" />
      <N.NoticeDetail>공지사항 상세 페이지</N.NoticeDetail>
      {/* 테스트를 위해 임시로 만든 어드민 전용 버튼(수정바람)*/}
      {isAdminLoggedIn() && (
        <div>
          <button onClick={handleEdit}>수정</button>
          <button>삭제</button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default NoticeDetail;
