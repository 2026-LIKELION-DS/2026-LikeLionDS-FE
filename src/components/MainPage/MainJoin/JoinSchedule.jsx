import * as M_ from "@styles/JoinTargetStyle";
import * as M__ from "@styles/JoinPeriodStyle";
import * as M from "@styles/JoinScheduleStyle";
import Schedule from "./Schedule";

const JoinSchedule = () => {
  return (
    <>
      <M__.TextContainer>
        <M_.TitleText>모집 일정</M_.TitleText>
      </M__.TextContainer>

      <M.LineContainer>
        <div>
          <Schedule date={"02.06 - 02.20"} text={"13기 모집"}></Schedule>
          <M.Line />

          <Schedule date={"02.26"} text={"1차 합격자 발표"}></Schedule>
          <M.Line />

          <Schedule date={"03.04 - 03.06"} text={"대면 면접"}></Schedule>
          <M.Line />

          <Schedule date={"03.08"} text={"최종 합격자 발표"}></Schedule>
          <M.Line />

          <Schedule date={"03.10"} text={"OT"}></Schedule>
        </div>
      </M.LineContainer>
    </>
  );
};

export default JoinSchedule;
