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
  // 파트별 이미지 상태
  // 초기엔 front 이미지가 로딩되도록
  const [imgSrc, setImgSrc] = useState({
    plan: icon_plan_front_bgr,
    FE: icon_FE_front_bgr,
    BE: icon_BE_front_bgr,
  });

  const handleImgClicked = (key) => {
    setImgSrc((prev) => ({
      plan:
        key === "plan"
          ? prev.plan === icon_plan_front_bgr
            ? icon_plan_back
            : icon_plan_front_bgr
          : icon_plan_front_bgr,
      FE: key === "FE" ? (prev.FE === icon_FE_front_bgr ? icon_FE_back : icon_FE_front_bgr) : icon_FE_front_bgr,
      BE: key === "BE" ? (prev.BE === icon_BE_front_bgr ? icon_BE_back : icon_BE_front_bgr) : icon_BE_front_bgr,
    }));
  };

  return (
    <M.PageContainer $marginTop={"232px"}>
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
            <M.PartImgWrapper src={imgSrc.plan} />

            {imgSrc.plan === icon_plan_front_bgr && (
              <>
                <M.PartOrangeWrapperBE $width={"122px"} $height={"38px"} $top={"58.96%"} $right={"4.28%"}>
                  <M.PartName $fontSize={"20px"}>기획•디자인</M.PartName>
                </M.PartOrangeWrapperBE>
                <div>
                  <M.PartNameWrapperBE $width={"55px"} $height={"25px"} $top={"80.66%"} $right={"28%"}>
                    <M.PartName $fontSize={"16px"}>Plan</M.PartName>
                  </M.PartNameWrapperBE>

                  <M.PartNameWrapperBE $width={"74px"} $height={"25px"} $top={"80.66%"} $right={"4.28%"}>
                    <M.PartName $fontSize={"16px"}>Design</M.PartName>
                  </M.PartNameWrapperBE>
                </div>
              </>
            )}
          </M.PartImgContainer>

          {/* 사다리꼴 모양으로 */}
          <div>
            <M.PartImgContainerFE onClick={() => handleImgClicked("FE")}>
              <M.PartImgWrapper src={imgSrc.FE} />

              {imgSrc.FE === icon_FE_front_bgr && (
                <>
                  <M.PartOrangeWrapperFE $width={"113px"} $height={"38px"} $top={"7.54%"} $left={"4.57%"}>
                    <M.PartName $fontSize={"20px"}>프론트엔드</M.PartName>
                  </M.PartOrangeWrapperFE>
                  <M.PartNameWrapperFE $width={"95px"} $height={"25px"} $top={"29.24%"} $left={"4.57%"}>
                    <M.PartName $fontSize={"16px"}>Front-end</M.PartName>
                  </M.PartNameWrapperFE>
                </>
              )}
            </M.PartImgContainerFE>

            <M.PartImgContainerBE onClick={() => handleImgClicked("BE")}>
              <M.PartImgWrapper src={imgSrc.BE} />

              {imgSrc.BE === icon_BE_front_bgr && (
                <>
                  <M.PartOrangeWrapperBE $width={"79px"} $height={"38px"} $top={"58.96%"} $right={"4.57%"}>
                    <M.PartName $fontSize={"20px"}>백엔드</M.PartName>
                  </M.PartOrangeWrapperBE>
                  <M.PartNameWrapperBE $width={"92px"} $height={"25px"} $top={"81.60%"} $right={"4.57%"}>
                    <M.PartName $fontSize={"16px"}>Back-end</M.PartName>
                  </M.PartNameWrapperBE>
                </>
              )}
            </M.PartImgContainerBE>
          </div>
        </M.PartContainer>
      </M.ComponentContainer>
    </M.PageContainer>
  );
};

export default MainPartInfo;
