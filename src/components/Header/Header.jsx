import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import LikelionDS from "@assets/logo/logo_ds_topbar_burgundy.svg";
import Menu from "@assets/icons/icon_menu.svg";

function Header() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <H.Header>
        <H.Logo onClick={() => handleNavLinkClick("/")}>
          <img src={LikelionDS} alt="덕성 멋사" />
        </H.Logo>
        <H.Menu src={Menu} alt="메뉴" />
      </H.Header>
    </>
  );
}

export default Header;
