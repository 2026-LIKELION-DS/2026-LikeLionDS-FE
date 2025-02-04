import React, { useState } from "react";
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
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialIndex,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
  };

  return (
    <>
      <Header current={currentIndex + 1} total={images.length} />
      <I.ImageDetail>
        <Slider {...settings}>
          {images.map((img) => (
            <div key={img.id}>
              <img
                src={`${import.meta.env.VITE_API_URL}${img.image_url}`}
                alt="상세 이미지"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Slider>
      </I.ImageDetail>
    </>
  );
}

export default ImageDetail;
