import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import LikelionDS from "@assets/logo/logo_ds_topbar_orange.svg";
import Menu from "@assets/icons/icon_menu.svg";
import Back from "@assets/icons/icon_arrow_back.svg";

function HeaderApp() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <H.Header>
        <H.Back src={Back} alt="뒤로가기" onClick={onClickBack} />
        <H.LogoOrg onClick={() => handleNavLinkClick("/")}>
          <img src={LikelionDS} alt="덕성 멋사" />
        </H.LogoOrg>
        <H.Menu src={Menu} alt="메뉴" />
      </H.Header>
    </>
  );
}

export default HeaderApp;
