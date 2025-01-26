import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import LikelionDS from "@assets/logo/likelion_DS_logo.png";
import Menu from "@assets/icons/icon_menu.svg";

function HeaderAdmin({ title }) {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <H.Header>
        <H.LogoMin onClick={() => handleNavLinkClick("/")}>
          <img src={LikelionDS} alt="덕성 멋사" />
        </H.LogoMin>
        <H.Title>{title}</H.Title>
        <H.Menu src={Menu} alt="메뉴" />
      </H.Header>
    </>
  );
}

export default HeaderAdmin;
