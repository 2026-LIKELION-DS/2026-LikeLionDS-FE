import * as M from "@styles/MainJoinStyle";
import * as M_ from "@styles/PartInfoStyle";

import JoinRectangle from "./JoinRectangle";

import palette from "@lib/colorPalette";

import Lottie from "lottie-react";
import loadingLottie from "@assets/motions/카드 모션/card.json";

import icon_arrow_red from "@assets/icons/icon_arrow_red.svg";
import text_animation from "@assets/icons/icon_textAnimation1.svg";
import text_animation2 from "@assets/icons/icon_textAnimation2.svg";
import text_animation_png from "@assets/logo/logo_textAnimation.png";

const MainJoinHeader = () => {
  const IMAGE_WIDTH = 402; // 이미지 하나의 너비 (px)

  // 반복할 이미지 개수
  // (화면 채우기 위한 최소 이미지 개수) + 여유분
  const NUM_IMAGES = Math.ceil(390 / IMAGE_WIDTH) + 2;
  return (
    <M.JoinContainer $marginTop={"244px"}>
      {/* 텍스트 애니메이션 */}
      <M.TextAniContainer>
        <M.TextAniWrapper>
          {/* NUM_IMAGES개만큼 이미지 반복하도록  */}
          {[...Array(NUM_IMAGES)].map((_, i) => (
            <img key={i} src={text_animation2} />
          ))}
        </M.TextAniWrapper>
      </M.TextAniContainer>

      <JoinRectangle
        width={"330px"}
        height={"86px"}
        $borderRadius={"51px"}
        $bgr={palette.boldBlack.ex9}
        color={palette.style.white}
        fontWeight={600}
        fontSize={"20px"}
        letterSpacing={"-0.6px"}>
        <div>
          <p>덕성여대 멋쟁이사자처럼 13기를</p>
          <p>모집합니다!</p>
        </div>
      </JoinRectangle>

      {/* lottie */}
      <M.AnimationWrapper>
        <Lottie animationData={loadingLottie} loop autoPlay />
      </M.AnimationWrapper>

      {/* 화살표 */}
      <M.ImgWrapper>
        <img src={icon_arrow_red} />
      </M.ImgWrapper>
    </M.JoinContainer>
  );
};

export default MainJoinHeader;
