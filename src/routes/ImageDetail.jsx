import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as I from "@styles/ImageDetailStyle";

import Header from "@components/Header/HeaderNum";

function ImageDetail({ index }) {
  const location = useLocation();
  const { initialIndex, images } = location.state;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    // 초기값 설정
    setShowArrows(mediaQuery.matches);

    // 미디어 조건 변화 감지
    const handleChange = (e) => setShowArrows(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialIndex,
    arrows: showArrows,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
  };

  return (
    <>
      <Header current={currentIndex + 1} total={images.length} />
      <I.Space>
        <I.ImageDetail>
          <Slider {...settings}>
            {images.map((img) => (
              <div key={img.id}>
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${img.image_url}`}
                  alt="상세 이미지"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </Slider>
        </I.ImageDetail>
      </I.Space>
    </>
  );
}

export default ImageDetail;
