import React from "react";
import { useNavigate } from "react-router-dom";
import * as E from "@styles/ErrorStyle";

import ErrorLogo from "../assets/icons/icon_error.svg";

function Error() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <E.Error>
        <E.LogoSpace>
          <E.Logo src={ErrorLogo} alt="페이지를 찾을 수 없습니다." />
          페이지를 찾을 수 없습니다.
        </E.LogoSpace>
        <E.HomeButton onClick={() => handleNavLinkClick("/main")}>홈으로 가기</E.HomeButton>
      </E.Error>
    </>
  );
}

export default Error;
