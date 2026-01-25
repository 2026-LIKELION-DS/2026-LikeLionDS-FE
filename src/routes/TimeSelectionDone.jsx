import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as N from "@styles/TimeSelectionStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";



function TimeSelectionDone() {


  return (
    <>
      <Header title="면접 시간 작성하기" />

      <N.Space>
      </N.Space>

      <Footer />
    </>
  );
}

export default TimeSelectionDone;
