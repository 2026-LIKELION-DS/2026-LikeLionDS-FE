import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as N from "@styles/NoticeDetailStyle";
import { isAdminLoggedIn } from "@utils/Admin";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";
import noticeDetailData from "@/data/noticeDetailData.json";

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const selectedNotice = noticeDetailData.find((item) => item.id === Number(id));
    setNotice(selectedNotice || null);
  }, [id]);

  // 서버 연동 코드 (배포 중단으로 프론트 내에서 아카이빙 처리)
  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/board/${id}`)
  //     .then((response) => {
  //       setNotice(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("공지사항을 불러오는 중 오류 발생:", error);
  //     });
  // }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = String(date.getFullYear()).slice(2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  const handleEdit = () => {
    if (isAdminLoggedIn()) {
      navigate(`/admin/notice/${id}/edit`);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("글을 삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/board/${id}/`)
        .then(() => {
          alert("공지사항이 삭제되었습니다.");
          navigate("/notice");
        })
        .catch((error) => {
          console.error("삭제 중 오류 발생:", error);
          alert("공지사항 삭제에 실패했습니다.");
        });
    }
  };

  const handleImageClick = (clickedIndex) => {
    navigate("/image-detail", { state: { initialIndex: clickedIndex, images: notice.images } });
  };

  const renderContentWithLinks = (content) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return content.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line.split(urlRegex).map((part, i) =>
          urlRegex.test(part) ? (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          ) : (
            part
          ),
        )}
        <br />
      </React.Fragment>
    ));
  };

  const getImagePath = (imageUrl) => {
    return imageUrl;
  };

  return (
    <>
      <N.Space>
        <>
          <Header title="공지사항" />
          <N.NoticeDetail>
            {notice ? (
              <>
                <N.Created>{formatDate(notice.created_at)}</N.Created>
                <N.Title>{notice.title}</N.Title>
                <N.Content>{renderContentWithLinks(notice.content)}</N.Content>
                <N.ImageContainer>
                  {notice.images.map((img, index) => (
                    <N.Image
                      key={img.id}
                      src={getImagePath(img.image_url)}
                      alt="공지 이미지"
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
                </N.ImageContainer>
                {isAdminLoggedIn() && (
                  <N.Admin>
                    <N.Button onClick={handleEdit}>수정</N.Button>
                    <N.Button onClick={handleDelete}>삭제</N.Button>
                  </N.Admin>
                )}
              </>
            ) : (
              <div>공지를 불러오는 중...</div>
            )}
          </N.NoticeDetail>{" "}
        </>
        <Footer />
      </N.Space>
    </>
  );
}

export default NoticeDetail;
