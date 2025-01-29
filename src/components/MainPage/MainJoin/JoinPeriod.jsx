import * as M_ from "@styles/JoinTargetStyle";
import * as M from "@styles/JoinPeriodStyle";

import Lottie from "lottie-react";
import loadingLottie from "@assets/motions/활동기간 모션/period.json";

const JoinPeriod = () => {
  return (
    <>
      <M.StyledTitleText>활동 기간</M.StyledTitleText>
      <M.TextWrapper>
        <M.Text>중도 탈퇴 없이 끝까지 성실히 활동에 참여할 수 있는 아기사자를 찾고 있어요.</M.Text>
      </M.TextWrapper>

      {/* lottie */}
      <Lottie animationData={loadingLottie} loop={false} />
    </>
  );
};

export default JoinPeriod;
