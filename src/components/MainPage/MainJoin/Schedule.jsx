import JoinRectangle from "./JoinRectangle";
import palette from "@lib/colorPalette";
import * as M from "@styles/ScheduleStyle";

import { useEffect, useRef, useState } from "react";

const JoinScheduleRectangle = ({ children }) => {
  return (
    <JoinRectangle
      width={"146px"}
      height={"43px"}
      $borderRadius={"62px"}
      $bgr={palette.boldBlack.ex7}
      color={palette.style.white}
      fontWeight={500}
      fontSize={"16px"}
      letterSpacing={"-0.48px"}>
      {children}
    </JoinRectangle>
  );
};

const Schedule = ({ date, text, children, className }) => {
  const [isVisible, setIsVisible] = useState(false); // 화면에 보이는지 여부
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // 화면에 보이면 true
      },
      {
        rootMargin: "-48% 0px -48% 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <M.ScheduleWrapper className={className} ref={ref}>
        <M.Circle $isVisible={isVisible} />
        <M.DateText>{date}</M.DateText>
        <JoinScheduleRectangle>{text}</JoinScheduleRectangle>
      </M.ScheduleWrapper>
      {children && <div>{children}</div>}
    </>
  );
};

export default Schedule;
