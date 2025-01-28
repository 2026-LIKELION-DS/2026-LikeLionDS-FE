import React from "react";
import * as A from "@styles/ApplicantsStyle";

import Header from "@components/Header/HeaderApp";

function Applicants() {
  return (
    <>
      <Header />
      <A.Applicants>합격자 조회 input 페이지</A.Applicants>
    </>
  );
}

export default Applicants;
