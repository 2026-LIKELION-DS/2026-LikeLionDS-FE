import React from "react";
import * as A from "@styles/ApplicantsResultStyle";

import Header from "@components/Header/HeaderApp";

function ApplicantsResult() {
  return (
    <>
      <Header />
      <A.ApplicantsResult>합격자 조회 결과 페이지</A.ApplicantsResult>
    </>
  );
}

export default ApplicantsResult;
