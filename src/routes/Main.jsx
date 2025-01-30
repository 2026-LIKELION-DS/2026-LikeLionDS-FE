import React from "react";
import * as M from "@styles/MainStyle";

import Header from "@components/Header/Header";
import MainStartPage from "@components/Main/MainStartPage";
import Main12thProjects from "@components/Main/Main12thProjects";
import MainLastPage from "@components/Main/MainLastPage";

function Main() {
  return (
    <>
      <Header />
      <M.Main></M.Main>
      <MainStartPage />
      <Main12thProjects />
      <MainLastPage />
    </>
  );
}

export default Main;
