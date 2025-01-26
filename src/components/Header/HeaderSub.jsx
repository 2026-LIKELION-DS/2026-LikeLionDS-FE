import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import Menu from "@assets/icons/icon_menu.svg";
import Back from "@assets/icons/icon_arrow_back.svg";

function HeaderSub({ title }) {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <H.Header>
        <H.Back src={Back} alt="뒤로가기" onClick={onClickBack} />
        <H.Title>{title}</H.Title>
        <H.Menu src={Menu} alt="메뉴" />
      </H.Header>
    </>
  );
}

export default HeaderSub;
