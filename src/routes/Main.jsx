import React from "react";
import * as M from "@styles/MainStyle";
import PartInfo from "@components/MainPage/PartInfo";
import MainJoin from "@components/MainPage/MainJoin/MainJoin";

import Header from "@components/Header/Header";
import MainFAQ from "../components/MainPage/MainFAQ/MainFAQ";

function Main() {
  return (
    <>
      <Header />
      <M.Main>
        <PartInfo />
        <MainJoin />
        <MainFAQ />
      </M.Main>
    </>
  );
}

export default Main;
