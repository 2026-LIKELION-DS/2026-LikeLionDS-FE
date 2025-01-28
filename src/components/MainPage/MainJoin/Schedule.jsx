import JoinRectangle from "./JoinRectangle";
import palette from "@lib/colorPalette";
import * as M from "@styles/ScheduleStyle";

const JoinScheduleRectangle = ({ children }) => {
  return (
    <JoinRectangle
      width={"146px"}
      height={"43px"}
      borderRadius={"62px"}
      bgr={palette.boldBlack.ex7}
      color={palette.style.white}
      fontWeight={500}
      fontSize={"16px"}>
      {children}
    </JoinRectangle>
  );
};

const Schedule = ({ date, text, children }) => {
  return (
    <>
      <M.ScheduleWrapper>
        <M.Circle />
        <M.DateText>{date}</M.DateText>
        <JoinScheduleRectangle>{text}</JoinScheduleRectangle>
      </M.ScheduleWrapper>
      {children && <div>{children}</div>}
    </>
  );
};

export default Schedule;
