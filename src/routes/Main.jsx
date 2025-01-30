import React from "react";
import * as M from "@styles/MainStyle";
import MainPartInfo from "@components/MainPage/MainPartInfo";
import MainJoin from "@components/MainPage/MainJoin/MainJoin";

import Header from "@components/Header/Header";
import MainFAQ from "../components/MainPage/MainFAQ/MainFAQ";

function Main() {
  return (
    <>
      <Header />
      <M.Main>
        <MainPartInfo /> {/* 파트별 소개 */}
        <MainJoin /> {/* 아기사자 모집 안내 */}
        <MainFAQ /> {/* 자주 묻는 질문 */}
      </M.Main>
    </>
  );
}

export default Main;
