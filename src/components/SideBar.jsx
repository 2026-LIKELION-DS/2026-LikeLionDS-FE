import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@styles/SideBarStyle";

import Close from "@assets/icons/icon_close.svg";

function SideBar({
  onClose,
  isSidebarOpen,
  currentPath,
  scrollToSection,
  activeSection,
  setActiveManually,
  navigateToMainSection,
}) {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const handleScrollAndClose = (section) => {
    if (currentPath === "/main") {
      // 현재 메인 페이지에 있을 경우 직접 스크롤 이동
      scrollToSection(section);
      setActiveManually(section);
    } else {
      // 메인이 아닌 경우 메인으로 이동 후 스크롤
      navigateToMainSection(section);
    }
    onClose();
  };

  // 1차 합격자 조회
  const isWithinDateRange = () => {
    const today = new Date();
    const startDate = new Date("2025-02-26");
    const endDate = new Date("2025-03-08");
    return today >= startDate && today <= endDate;
  };

  // 최종 합격자 조회
  const isFinalDateRange = () => {
    const today = new Date();
    const startDate = new Date("2025-03-08");
    return today >= startDate;
  };

  const handleOpenApplicationForm = () => {
    window.open("https://forms.gle/QDrszV6xmGcnxr6g6", "_blank");
  };

  return (
    <>
      <S.Background onClick={onClose} />
      <S.SideBar $isSidebarOpen={isSidebarOpen}>
        <S.CloseBtn>
          <S.Close src={Close} alt="닫기" onClick={onClose} />
        </S.CloseBtn>
        <S.Index>
          <S.MainGroup>
            <S.Title onClick={() => handleNavLinkClick("/main")} $isActive={currentPath === "/main"}>
              멋쟁이사자처럼
            </S.Title>
            <S.SubGroup>
              <S.SubIndex onClick={() => handleScrollAndClose("start")} $isActive={activeSection === "start"}>
                멋쟁이사자처럼이란?
              </S.SubIndex>
              <S.SubIndex onClick={() => handleScrollAndClose("partInfo")} $isActive={activeSection === "partInfo"}>
                파트별 소개
              </S.SubIndex>
              <S.SubIndex onClick={() => handleScrollAndClose("projects")} $isActive={activeSection === "projects"}>
                덕성 멋사는
              </S.SubIndex>
              <S.SubIndex onClick={() => handleScrollAndClose("join")} $isActive={activeSection === "join"}>
                아기사자 모집 안내
              </S.SubIndex>
              <S.SubIndex onClick={() => handleScrollAndClose("faq")} $isActive={activeSection === "faq"}>
                자주 묻는 질문
              </S.SubIndex>
            </S.SubGroup>
          </S.MainGroup>
          <S.Title onClick={() => handleNavLinkClick("/notice")} $isActive={currentPath === "/notice"}>
            공지사항
          </S.Title>
          <S.Title onClick={() => handleNavLinkClick("/qna")} $isActive={currentPath === "/qna"}>
            질문하러가기
          </S.Title>
          <S.Title onClick={handleOpenApplicationForm}>지원하러가기</S.Title>
          {isWithinDateRange() ? (
            <S.Title onClick={() => handleNavLinkClick("/input")} $isActive={currentPath === "/input"}>
              1차 합격자 조회하기
            </S.Title>
          ) : (
            <S.ResultGroup>
              <S.SubTitle>1차 합격자 조회하기</S.SubTitle>
              <S.SubDate>02.26부터</S.SubDate>
            </S.ResultGroup>
          )}
          {isFinalDateRange() ? (
            <S.Title onClick={() => handleNavLinkClick("/input")} $isActive={currentPath === "/input"}>
              최종 합격자 조회하기
            </S.Title>
          ) : (
            <S.ResultGroup>
              <S.SubTitle>최종 합격자 조회하기</S.SubTitle>
              <S.SubDate>03.08부터</S.SubDate>
            </S.ResultGroup>
          )}
        </S.Index>
      </S.SideBar>
    </>
  );
}

export default SideBar;
