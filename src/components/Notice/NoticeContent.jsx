import React from "react";
import * as N from "@styles/NoticeContentStyle";

function NoticeContent({ title, created, preview }) {
  return (
    <>
      <N.NoticeContent>
        <N.Top>
            <N.Title>{title}</N.Title>
            <N.Created>{created}</N.Created>
        </N.Top>
        <N.Bottom>{preview}</N.Bottom>
      </N.NoticeContent>
    </>
  );
}

export default NoticeContent;
