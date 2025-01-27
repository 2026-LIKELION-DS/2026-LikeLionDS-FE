import * as M from "@styles/MainJoinStyle";

import JoinRectangle from "./JoinRectangle";
import palette from "@lib/colorPalette";

import Lottie from "lottie-react";
import loadingLottie from "@assets/motions/카드 모션/card.json";

import icon_arrow_red from "@assets/icons/icon_arrow_red.svg";

const MainJoin = () => {
  return (
    <M.JoinContainer>
      <JoinRectangle
        width={"330px"}
        height={"86px"}
        borderRadius={"51px"}
        text={"덕성여대 멋쟁이사자처럼 13기를 모집합니다!"}
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
  );
};
export default MainJoin;
