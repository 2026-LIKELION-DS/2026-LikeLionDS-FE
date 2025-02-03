import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import LikelionDS from "@assets/logo/likelion_DS_logo.png";
import Menu from "@assets/icons/icon_menu.svg";
import SideBar from "@components/SideBar";

function HeaderAdmin({ title }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const handleSideBarlick = () => {
    setSidebarOpen(true);
    setSidebarVisible(true);
  };

  const closeSideBarClick = () => {
    setSidebarVisible(false);
    setTimeout(() => {
      setSidebarOpen(false);
    }, 400); // 400ms 후에 사이드바 상태를 false로 설정
  };

  const navigateToMainSection = (section) => {
    navigate("/main", { state: { scrollTo: section } });
  };

  return (
    <>
      <H.Header>
        <H.LogoMin onClick={() => handleNavLinkClick("/")}>
          <img src={LikelionDS} alt="덕성 멋사" />
        </H.LogoMin>
        <H.Title>{title}</H.Title>
        <H.Menu src={Menu} alt="메뉴" onClick={handleSideBarlick} />
      </H.Header>

      {isSidebarOpen && (
        <>
          <SideBar
            onClose={closeSideBarClick}
            isSidebarOpen={isSidebarVisible}
            currentPath={location.pathname}
            navigateToMainSection={navigateToMainSection}
          />
        </>
      )}
    </>
  );
}

export default HeaderAdmin;
