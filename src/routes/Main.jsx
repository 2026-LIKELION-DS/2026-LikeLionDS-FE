import React from "react";
import * as M from "@styles/MainStyle";
import PartInfo from "@components/MainPage/PartInfo";
import MainJoin from "@components/MainPage/MainJoin/MainJoin";

import Header from "@components/Header/Header";

function Main() {
  return (
    <>
      <Header />
      <M.Main>
        <PartInfo />
        <MainJoin />
      </M.Main>
    </>
  );
}

export default Main;
