import * as M from "@styles/MainJoinStyle";
import * as M_ from "@styles/PartInfoStyle";

import JoinRectangle from "./JoinRectangle";
import JoinTarget from "./JoinTarget";

import palette from "@lib/colorPalette";

import Lottie from "lottie-react";
import loadingLottie from "@assets/motions/카드 모션/card.json";

import icon_arrow_red from "@assets/icons/icon_arrow_red.svg";
import icon_underline_red from "@assets/icons/icon_underline_red.svg";
import text_animation from "@assets/icons/icon_textAnimation1.svg";
import JoinPeriod from "./JoinPeriod";
import JoinSchedule from "./JoinSchedule";

const MainJoin = () => {
  const IMAGE_WIDTH = 402; // 이미지 하나의 너비 (px)

  // 반복할 이미지 개수
  // (화면 채우기 위한 최소 이미지 개수) + 여유분
  const NUM_IMAGES = Math.ceil(390 / IMAGE_WIDTH) + 5;

  return (
    <>
      <M.JoinContainer $marginTop={"244px"}>
        {/* 텍스트 애니메이션 */}
        <M.TextAniContainer>
          <M.TextAniWrapper>
            {/* NUM_IMAGES개만큼 이미지 반복하도록  */}
            {[...Array(NUM_IMAGES)].map((_, i) => (
              <img key={i} src={text_animation} />
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

      {/* 아기사자 모집 안내 */}
      <M_.PageContainer>
        <M_.ComponentContainer $width={"342px"}>
          <M.TitleContainer>
            <M_.TextWrapper $fontSize={"28px"} $fontWeight={600} $letterSpacing={"-0.84px"}>
              아기사자 모집 안내
            </M_.TextWrapper>
            <M_.ImgWrapper width={"144px"}>
              <img src={icon_underline_red} />
            </M_.ImgWrapper>
          </M.TitleContainer>

          {/* 모집 대상 */}
          <JoinTarget />

          {/* 활동 기간 */}
          <JoinPeriod />

          {/* 모집 일정 */}
          <JoinSchedule />
        </M_.ComponentContainer>
      </M_.PageContainer>
    </>
  );
};
export default MainJoin;
