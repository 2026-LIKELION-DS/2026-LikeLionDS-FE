import * as M from "@styles/MainJoinStyle";
import * as M_ from "@styles/PartInfoStyle";

import JoinRectangle from "./JoinRectangle";
import JoinTarget from "./JoinTarget";

import palette from "@lib/colorPalette";

import Lottie from "lottie-react";
import loadingLottie from "@assets/motions/카드 모션/card.json";

import icon_arrow_red from "@assets/icons/icon_arrow_red.svg";
import icon_underline_red from "@assets/icons/icon_underline_red.svg";
import JoinPeriod from "./JoinPeriod";
import JoinSchedule from "./JoinSchedule";

const MainJoin = () => {
  return (
    <>
      <M.JoinContainer>
        <JoinRectangle
          width={"330px"}
          height={"86px"}
          borderRadius={"51px"}
          bgr={palette.boldBlack.ex9}
          color={palette.style.white}
          fontWeight={600}
          fontSize={"20px"}>
          <div>
            <p>덕성여대 멋쟁이사자처럼 13기를</p>
            <p>모집합니다!</p>
          </div>
        </JoinRectangle>

        <M.AnimationWrapper>
          <Lottie animationData={loadingLottie} loop autoPlay />
        </M.AnimationWrapper>

        <M.ImgWrapper>
          <img src={icon_arrow_red} />
        </M.ImgWrapper>
      </M.JoinContainer>

      {/* 아기사자 모집 안내 */}
      <div>
        <M_.TextWrapper $fontSize={"28px"} $fontWeight={600}>
          아기사자 모집 안내
        </M_.TextWrapper>
        <M_.ImgWrapper>
          <img src={icon_underline_red} />
        </M_.ImgWrapper>
      </div>

      {/* 모집 대상 */}
      <M.JoinContainer>
        <JoinTarget />
      </M.JoinContainer>

      {/* 활동 기간 */}
      <JoinPeriod />

      {/* 모집 일정 */}
      <JoinSchedule />
    </>
  );
};
export default MainJoin;
