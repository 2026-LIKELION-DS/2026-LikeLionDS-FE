import * as M from "@styles/PartInfoStyle";

import icon_underline_orange from "@assets/icons/icon_underline_orange.svg";
import icon_plan_front from "@assets/icons/icon_plan_front.svg";
import icon_plan_back from "@assets/icons/icon_plan_back.svg";
import icon_FE_front from "@assets/icons/icon_FE_front.svg";
import icon_FE_back from "@assets/icons/icon_FE_back.svg";
import icon_BE_front from "@assets/icons/icon_BE_front.svg";
import icon_BE_back from "@assets/icons/icon_BE_back.svg";

import { useState } from "react";

const MainPartInfo = () => {
  // 파트별 이미지 상태
  // 초기엔 front 이미지가 로딩되도록
  const [imgSrc, setImgSrc] = useState({
    plan: icon_plan_front,
    FE: icon_FE_front,
    BE: icon_BE_front,
  });

  const handleImgClicked = (key) => {
    setImgSrc((prev) => ({
      plan: key === "plan" ? (prev.plan === icon_plan_front ? icon_plan_back : icon_plan_front) : icon_plan_front,
      FE: key === "FE" ? (prev.FE === icon_FE_front ? icon_FE_back : icon_FE_front) : icon_FE_front,
      BE: key === "BE" ? (prev.BE === icon_BE_front ? icon_BE_back : icon_BE_front) : icon_BE_front,
    }));
  };

  return (
    <M.PageContainer $marginTop={"232px"}>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-rwdImageMaps/1.6/jquery.rwdImageMaps.min.js"></script>
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
          </M.PartImgContainer>

          {/* 사다리꼴 모양으로 */}
          <div>
            <M.PartImgContainerFE onClick={() => handleImgClicked("FE")}>
              <M.PartImgWrapper src={imgSrc.FE} />
            </M.PartImgContainerFE>

            <M.PartImgContainerBE onClick={() => handleImgClicked("BE")}>
              <M.PartImgWrapper src={imgSrc.BE} />
            </M.PartImgContainerBE>
          </div>
        </M.PartContainer>
      </M.ComponentContainer>
    </M.PageContainer>
  );
};

export default MainPartInfo;
