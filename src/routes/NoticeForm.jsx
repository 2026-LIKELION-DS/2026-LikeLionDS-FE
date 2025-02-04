import React, { useRef, useState, useEffect }  from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as N from "@styles/NoticeFormStyle";
import * as A from "@styles/AdminLoginStyle";

import Header from "@components/Header/HeaderSub";
import Add from "@assets/icons/icon_add.svg";
import Delete from "@assets/icons/icon_close.svg";

function NoticeForm({ type }) {
  const { id } = useParams();
  const boardId = type === "edit" ? id : null;
  const navigate = useNavigate();

  const textAreaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]); // 미리보기 이미지
  const [imageFiles, setImageFiles] = useState([]) // 실제 파일 데이터

  useEffect(() => {
    if (boardId) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/board/${boardId}/`)
        .then((response) => {
          const { title, content, images } = response.data;
          setTitle(title);
          setContent(content);
          setImages(images || []);
        })
        .catch((error) => {
          console.error("공지사항 데이터를 불러오는 중 오류 발생:", error);
          alert("공지사항 데이터를 불러오지 못했습니다.");
        });
    }
  }, [boardId]);

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleImagePickerClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    imageFiles.forEach((file) => {
      formData.append("upload_images", file);
    });

    try {
      const url = boardId
        ? `${import.meta.env.VITE_API_URL}/board/${boardId}/`
        : `${import.meta.env.VITE_API_URL}/board/`;

      const method = boardId ? "put" : "post";

      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("공지사항 업로드 성공:");
      alert(boardId ? "공지사항이 성공적으로 수정되었습니다." : "공지사항이 성공적으로 등록되었습니다.");

      const newId = boardId || response.data.id;
      navigate(`/notice/${newId}`);

    } catch (error) {
      console.error("공지사항 업로드 실패:", error);
      alert("공지사항 업로드에 실패했습니다.");
    }
  };

  return (
    <>
      <Header title="공지사항(운영진)" />
      <N.NoticeForm>
        <N.Input
          type="text"
          placeholder="제목을 쓰시오"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <N.TextArea
          ref={textAreaRef}
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onInput={handleInput}
        />
      </N.NoticeForm>
      <N.ImageArea>
        <N.ImagePicker onClick={handleImagePickerClick}>
          <img src={Add} alt="image" />
        </N.ImagePicker>
        {images.map((src, index) => (
          <N.PreviewImage key={index}>
            <img src={src} alt={`preview-${index}`} />
            <N.DeleteButton onClick={() => handleDeleteImage(index)}>
              <img src={Delete} alt="delete" />
            </N.DeleteButton>
          </N.PreviewImage>
        ))}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
      </N.ImageArea>
      <N.ButtonContainer>
        <A.Button onClick={handleSubmit}>
          {boardId ? "수정 완료" : "작성 완료"}
        </A.Button>
      </N.ButtonContainer>
    </>
  );
}

export default NoticeForm;
