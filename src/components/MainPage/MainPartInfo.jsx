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

  // 클릭된 이미지 키 저장 (plan, FE, BE)
  const [activeKey, setActiveKey] = useState(null);

  const handleImgClicked = (key) => {
    setImgSrc((prev) => {
      const newImgSrc = { ...prev };

      // 하나만 클릭되도록, 클릭된 이미지는 back, 나머지는 front
      Object.keys(newImgSrc).forEach((part) => {
        // 클릭된 key와 파트가 일치한다면 ...
        if (part === key) {
          newImgSrc[part] =
            newImgSrc[part] === icon_plan_front ||
            newImgSrc[part] === icon_FE_front ||
            newImgSrc[part] === icon_BE_front
              ? part === "plan"
                ? icon_plan_back // plan이 클릭되면 back 이미지 보여줌
                : part === "FE"
                  ? icon_FE_back
                  : icon_BE_back
              : part === "plan" // 이미 back 이미지라면 ...
                ? icon_plan_front
                : part === "FE"
                  ? icon_FE_front
                  : icon_BE_front;
        } else {
          // 클릭되지 않으면 front
          newImgSrc[part] = part === "plan" ? icon_plan_front : part === "FE" ? icon_FE_front : icon_BE_front;
        }
      });

      return newImgSrc; // 변경된 이미지
    });

    setActiveKey(key); // 클릭된 키를 저장
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
            <M.PartImgWrapper data={imgSrc.plan} />
          </M.PartImgContainer>

          <M.PartImgContainerFE onClick={() => handleImgClicked("FE")}>
            <M.PartImgWrapper data={imgSrc.FE} />
          </M.PartImgContainerFE>

          <M.PartImgContainerBE onClick={() => handleImgClicked("BE")}>
            <M.PartImgWrapper data={imgSrc.BE} />
          </M.PartImgContainerBE>
        </M.PartContainer>
      </M.ComponentContainer>
    </M.PageContainer>
  );
};

export default MainPartInfo;
