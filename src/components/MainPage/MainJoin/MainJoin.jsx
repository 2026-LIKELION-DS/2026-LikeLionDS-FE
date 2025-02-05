import * as M from "@styles/MainJoinStyle";
import * as M_ from "@styles/PartInfoStyle";

import JoinTarget from "./JoinTarget";

import icon_underline_red from "@assets/icons/icon_underline_red.svg";
import JoinPeriod from "./JoinPeriod";
import JoinSchedule from "./JoinSchedule";

const MainJoin = () => {
  return (
    <>
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
