import React from "react";
import * as M from "@styles/MainStyle";
import MainPartInfo from "@components/MainPage/MainPartInfo";
import MainJoin from "@components/MainPage/MainJoin/MainJoin";

import Header from "@components/Header/Header";
import MainFAQ from "../components/MainPage/MainFAQ/MainFAQ";
import MainStartPage from "@components/Main/MainStartPage";
import Main12thProjects from "@components/Main/Main12thProjects";
import MainLastPage from "@components/Main/MainLastPage";

function Main() {
  return (
    <>
      <Header />
      <M.Main>
        <MainStartPage />
        <MainPartInfo /> {/* 파트별 소개 */}
        <Main12thProjects />
        <MainJoin /> {/* 아기사자 모집 안내 */}
        <MainFAQ /> {/* 자주 묻는 질문 */}
        <MainLastPage />
      </M.Main>
    </>
  );
}

export default Main;
