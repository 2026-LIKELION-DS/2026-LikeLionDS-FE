import React from "react";
import * as A from "@styles/AdminMenuStyle";

import Header from "@components/Header/HeaderAdmin";

function AdminMenu() {
  return (
    <>
      <Header title="운영진이시네요" />
      <A.AdminMenu>어드민 메뉴 페이지</A.AdminMenu>
    </>
  );
}

export default AdminMenu;
