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
  // 클릭된 이미지 키 저장 (plan, FE, BE)
  const [activeKey, setActiveKey] = useState(null);

  const getImageSrc = (key) => {
    // 클릭된 상태에 따라 이미지 결정
    // 클릭되면 _back 이미지 반환
    if (activeKey === key) {
      return key === "plan" ? icon_plan_back : key === "FE" ? icon_FE_back : icon_BE_back;
    }
    // 클릭되지 않으면 _front 이미지 반환
    return key === "plan" ? icon_plan_front : key === "FE" ? icon_FE_front : icon_BE_front;
  };

  const handleImgClicked = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key)); // 클릭된 상태를 토글
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
            <M.PartImgWrapper data={getImageSrc("plan")} />
          </M.PartImgContainer>

          <M.PartImgContainer onClick={() => handleImgClicked("FE")}>
            <M.PartImgWrapper data={getImageSrc("FE")} $marginTop={"17px"} />
          </M.PartImgContainer>

          <M.PartImgContainer onClick={() => handleImgClicked("BE")}>
            <M.PartImgWrapper data={getImageSrc("BE")} $marginTop={"-70px"} />
          </M.PartImgContainer>
        </M.PartContainer>
      </M.ComponentContainer>
    </M.PageContainer>
  );
};

export default MainPartInfo;
