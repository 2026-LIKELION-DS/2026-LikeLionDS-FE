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
  const [images, setImages] = useState([]); // 미리보기 이미지 (서버 이미지 + 새로 추가된 이미지)
  const [serverImages, setServerImages] = useState([]); // 서버에서 불러온 이미지
  const [imageFiles, setImageFiles] = useState([]); // 새로 추가된 이미지 파일
  const [deletedImages, setDeletedImages] = useState([]); // 삭제한 서버 이미지 목록

  console.log(images);
  
  useEffect(() => {
    if (boardId) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/board/${boardId}/`)
        .then((response) => {
          const { title, content, images } = response.data;
          setTitle(title);
          setContent(content);
          if (images && images.length > 0) {
            setServerImages(images);
            setImages(images.map(img => ({
              id: img.id,
              src: `${import.meta.env.VITE_IMAGE_URL}${img.image_url}`
            })));
          }
        })
        .catch((error) => {
          console.error("공지사항 데이터를 불러오는 중 오류 발생:", error);
          alert("공지사항 데이터를 불러오지 못했습니다.");
        });
    }
  }, [boardId]);

  useEffect(() => {
    if (content && textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [content]);  

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
        setImages((prevImages) => [...prevImages, { id: null, src: reader.result }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const deletedImage = newImages[index];
      if (deletedImage.id) {
        setDeletedImages((prev) => [...prev, deletedImage.id]);
        setServerImages((prev) => prev.filter(img => img.id !== deletedImage.id));
      } else {
        setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index - serverImages.length));
      }
      newImages.splice(index, 1);
      return newImages;
    });
  };
  

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
  
    // 서버에 남아있는 이미지 전송
    serverImages.forEach((img) => {
      formData.append("images_to_keep", img.image_url);
      console.log(img.image_url);
    });
  
    // 새로 추가한 이미지 파일 전송
    imageFiles.forEach((file) => {
      formData.append("uploaded_images", file);
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
        {images.map((image, index) => (
          <N.PreviewImage key={index}>
            <img src={image.src} alt={`preview-${index}`} />
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
