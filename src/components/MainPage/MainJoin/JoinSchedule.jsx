import * as M_ from "@styles/JoinTargetStyle";
import * as M__ from "@styles/JoinPeriodStyle";
import * as M from "@styles/JoinScheduleStyle";
import Schedule from "./Schedule";
import { useEffect, useState } from "react";

const JoinSchedule = () => {
  const [visibleIdx, setVisibleIdx] = useState(new Set()); // 항목들의 인덱스 추적

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // prev 화면에 보였던 항목들
        setVisibleIdx((prev) => {
          // 새로운 Set객체에 복사
          const newVisibleIdx = new Set(prev);

          entries.forEach((entry, idx) => {
            // 화면에 보이면 ...
            if (entry.isIntersecting) {
              newVisibleIdx.add(idx);
            }
            // 벗어나면 ...
            else {
              newVisibleIdx.delete(idx);
            }
          });
          return newVisibleIdx;
        });
      },
      {
        threshold: 1,
      },
    );

    const targets = Array.from(document.getElementsByClassName("schedules"));
    targets.forEach((element) => observer.observe(element)); // 각 요소마다 observer 적용

    return () => {
      targets.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <M__.TextContainer>
        <M_.TitleText>모집 일정</M_.TitleText>
      </M__.TextContainer>

      <M.LineContainer>
        <div>
          <Schedule date={"02.06 - 02.20"} text={"13기 모집"} className="schedules"></Schedule>
          <M.Line />

          <Schedule date={"02.26"} text={"1차 합격자 발표"} className="schedules"></Schedule>
          <M.Line />

          <Schedule date={"03.04 - 03.06"} text={"대면 면접"} className="schedules"></Schedule>
          <M.Line />

          <Schedule date={"03.08"} text={"최종 합격자 발표"} className="schedules"></Schedule>
          <M.Line />

          <Schedule date={"03.10"} text={"OT"} className="schedules"></Schedule>
        </div>
      </M.LineContainer>
    </>
  );
};

export default JoinSchedule;
