import React from "react";
import * as N from "@styles/NoticeContentStyle";

function NoticeContent({ title, created, preview, onClick }) {
  return (
    <>
      <N.NoticeContent onClick={onClick}>
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
