import React from "react";
import * as A from "@components/Splash/AppButtonStyle";

import RightArrow from "@assets/icons/icon_arrow_button.svg";

function AppButton({ text, onClick, isAnimating }) {
  return (
    <>
      <A.AppButton onClick={onClick} $isAnimating={isAnimating}>
        <A.Empty />
        <>{text}</>
        <A.Arrow src={RightArrow} alt="합격자 조회 바로가기" />
      </A.AppButton>
    </>
  );
}

export default AppButton;
