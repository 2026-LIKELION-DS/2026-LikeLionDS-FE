import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import LikelionDS from "@assets/logo/logo_ds_topbar_burgundy.svg";
import Menu from "@assets/icons/icon_menu.svg";
import SideBar from "@components/SideBar";

function Header() {
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
    }, 300); // 300ms 후에 사이드바 상태를 false로 설정
  };

  return (
    <>
      <H.Header>
        <H.Logo onClick={() => handleNavLinkClick("/")}>
          <img src={LikelionDS} alt="덕성 멋사" />
        </H.Logo>
        <H.Menu src={Menu} alt="메뉴" onClick={handleSideBarlick} />
      </H.Header>

      {isSidebarOpen && (
        <>
          <SideBar onClose={closeSideBarClick} isSidebarOpen={isSidebarVisible} currentPath={location.pathname} />
        </>
      )}
    </>
  );
}

export default Header;
