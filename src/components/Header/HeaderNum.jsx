import React from "react";
import * as H from "@styles/HeaderStyle";

import Close from "@assets/icons/icon_close.svg";

function HeaderNum({ current, total }) {
  return (
    <>
      <H.Header>
        <H.Close src={Close} alt="닫기" />
        <H.Pages>
          {current} / {total}
        </H.Pages>
        <H.Empty />
      </H.Header>
    </>
  );
}

export default HeaderNum;
