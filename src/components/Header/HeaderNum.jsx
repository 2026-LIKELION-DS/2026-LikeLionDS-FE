import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "@styles/HeaderStyle";

import Close from "@assets/icons/icon_close.svg";

function HeaderNum({ current, total }) {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <H.Header>
        <H.Close src={Close} alt="닫기" onClick={onClickBack} />
        <H.Pages>
          {current} / {total}
        </H.Pages>
        <H.Empty />
      </H.Header>
    </>
  );
}

export default HeaderNum;
