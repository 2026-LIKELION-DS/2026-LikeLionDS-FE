import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import LikelionDS from "@assets/logo/logo_ds_topbar_orange.svg";
import Menu from "@assets/icons/icon_menu.svg";
import Back from "@assets/icons/icon_arrow_back.svg";
import SideBar from "@components/SideBar";

function HeaderApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const onClickBack = () => {
    navigate(-1);
  };

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
        <H.Back src={Back} alt="뒤로가기" onClick={onClickBack} />
        <H.LogoOrg onClick={() => handleNavLinkClick("/main")}>
          <img src={LikelionDS} alt="덕성 멋사" />
        </H.LogoOrg>
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

export default HeaderApp;
