import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@styles/SideBarStyle";

import Close from "../assets/icons/icon_close.svg";

function SideBar({ onClose, isSidebarOpen, currentPath }) {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <S.Background onClick={onClose} />
      <S.SideBar $isSidebarOpen={isSidebarOpen}>
        <S.CloseBtn>
          <S.Close src={Close} alt="닫기" onClick={onClose} />
        </S.CloseBtn>
        <S.Index>
          <S.Title onClick={() => handleNavLinkClick("/main")} $isActive={currentPath === "/main"}>
            멋쟁이사자처럼
          </S.Title>
          <S.Title onClick={() => handleNavLinkClick("/notice")} $isActive={currentPath === "/notice"}>
            공지사항
          </S.Title>
          <S.Title onClick={() => handleNavLinkClick("/qna")} $isActive={currentPath === "/qna"}>
            질문하러가기
          </S.Title>
          <S.Title>지원하러가기</S.Title>
          <S.ResultGroup>
            <S.SubTitle>1차 합격자 조회하기</S.SubTitle>
            <S.SubDate>02.26부터</S.SubDate>
          </S.ResultGroup>
          <S.ResultGroup>
            <S.SubTitle>최종 합격자 조회하기</S.SubTitle>
            <S.SubDate>03.08부터</S.SubDate>
          </S.ResultGroup>
        </S.Index>
      </S.SideBar>
    </>
  );
}

export default SideBar;
