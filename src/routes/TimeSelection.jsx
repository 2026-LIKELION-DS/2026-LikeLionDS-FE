import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as N from "@styles/NoticeDetailStyle";
import { isAdminLoggedIn } from "@utils/Admin";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";
import noticeDetailData from "@/data/noticeDetailData.json";

function TimeSelection() {
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

export default TimeSelection;
