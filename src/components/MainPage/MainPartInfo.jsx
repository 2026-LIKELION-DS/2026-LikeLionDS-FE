import * as M from "@styles/PartInfoStyle";

import icon_underline_orange from "@assets/icons/icon_underline_orange.svg";
import icon_plan_front from "@assets/icons/icon_plan_front.svg";
import icon_plan_back from "@assets/icons/icon_plan_back.svg";
import icon_FE_front from "@assets/icons/icon_FE_front.svg";
import icon_FE_back from "@assets/icons/icon_FE_back.svg";
import icon_BE_front from "@assets/icons/icon_BE_front.svg";
import icon_BE_back from "@assets/icons/icon_BE_back.svg";

import icon_plan_front_bgr from "@assets/icons/icon_plan_front_bgr.svg";
import icon_FE_front_bgr from "@assets/icons/icon_FE_front_bgr.svg";
import icon_BE_front_bgr from "@assets/icons/icon_BE_front_bgr.svg";

import { useState } from "react";

const MainPartInfo = () => {
  // 클릭된 이미지 키 저장 (plan, FE, BE)
  const [activeKey, setActiveKey] = useState(null);

  const getImageSrc = (key) => {
    const frontImages = {
      plan: icon_plan_front_bgr,
      FE: icon_FE_front_bgr,
      BE: icon_BE_front_bgr,
    };
    const backImages = {
      plan: icon_plan_back,
      FE: icon_FE_back,
      BE: icon_BE_back,
    };
    // 클릭된 상태에 따라 이미지 결정
    return activeKey === key ? backImages[key] : frontImages[key];
  };

  const handleImgClicked = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key)); // 클릭된 상태를 토글
  };

  return (
    <M.PageContainer $marginTop={"232px"} $marginBottom={"270px"}>
      <M.ComponentContainer>
        {/* 텍스트 */}
        <M.TextContainer>
          <M.TextWrapper $fontSize={"18px"} $fontWeight={300} $letterSpacing={"-0.54px"}>
            저희 동아리의 커리큘럼은 이렇게 진행돼요.
          </M.TextWrapper>
          <div>
            <M.TextWrapper $fontSize={"28px"} $fontWeight={600} $letterSpacing={"-0.84px"}>
              파트별 소개
            </M.TextWrapper>
            <M.ImgWrapper width={"121px"}>
              <img src={icon_underline_orange} />
            </M.ImgWrapper>
          </div>
        </M.TextContainer>

        {/* 이미지 */}
        <M.PartContainer>
          <M.PartImgContainer onClick={() => handleImgClicked("plan")}>
            <M.PartImgWrapper src={getImageSrc("plan")} />
          </M.PartImgContainer>

          <div>
            <M.PartImgContainerFE onClick={() => handleImgClicked("FE")}>
              <M.PartImgWrapper src={getImageSrc("FE")} />
            </M.PartImgContainerFE>

            <M.PartImgContainerBE onClick={() => handleImgClicked("BE")}>
              <M.PartImgWrapper src={getImageSrc("BE")} />
            </M.PartImgContainerBE>
          </div>
        </M.PartContainer>
      </M.ComponentContainer>
    </M.PageContainer>
  );
};

export default MainPartInfo;
