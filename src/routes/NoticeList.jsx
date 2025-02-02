import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as N from "@styles/NoticeListStyle";
import * as A from "@styles/AdminLoginStyle";
import { isAdminLoggedIn } from "@utils/Admin";

import Header from "@components/Header/HeaderSub";
import NoticeContent from "@components/Notice/NoticeContent";
import Footer from "@components/Footer";

function NoticeList() {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/board`)
      .then((response) => {
        setNotices(response.data);
      })
      .catch((error) => {
        console.error("공지사항 목록을 불러오는 중 오류 발생:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = String(date.getFullYear()).slice(2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}.${month}.${day}`;
  };
  
  const handleNoticeClick = (id) => {
    navigate(`/notice/${id}`);
  };

  const handleNewNotice = () => {
    if (isAdminLoggedIn()) {
      navigate("/admin/notice/new");
    }
  };
  
  return (
    <>
      <Header title="공지사항" />
      <N.NoticeList>
        {isAdminLoggedIn() && 
          <A.Button type="submit" onClick={handleNewNotice}>
            작성하기
          </A.Button>
        }
        {notices.map((notice) => (
            <NoticeContent
              key={notice.id}
              title={notice.title}
              created={formatDate(notice.created_at)}
              preview={notice.content_preview}
              onClick={() => handleNoticeClick(notice.id)}
            />
          ))}
      </N.NoticeList>
      <Footer />
    </>
  );
}

export default NoticeList;
