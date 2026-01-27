import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/WriteConfirmStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

function WriteConfirm() {
  return (
    <>
      <Header title="지원서 작성 확인"></Header>
      <Footer />
    </>
  );
}

export default WriteConfirm;
