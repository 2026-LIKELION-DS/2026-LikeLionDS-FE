import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as N from "@styles/TimeSelectionStyle";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

import notice from "@/assets/icons/notice.svg";

const DAYS = [
  {
    date: "3월 4일 수요일",
    times: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"],
  },
  {
    date: "3월 5일 목요일",
    times: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"],
  },
  {
    date: "3월 6일 금요일",
    times: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"],
  },
];

function TimeSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]); 

  const handleSelect = (day, time) => {
    const value = `${day}-${time}`;

    setSelected(
      (prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value) 
          : [...prev, value], 
    );
  };

  return (
    <>
      <Header title="면접 시간 작성하기" />

      <N.Space>
        <N.NoticeBox>
          <N.Icon src={notice} alt="안내" />
          <N.NoticeText>
            면접은 대면으로 진행되며,
            <br />
            인당 30분이 넘지 않게 진행될 예정입니다.
          </N.NoticeText>
        </N.NoticeBox>

        {DAYS.map((day) => (
          <N.DaySection key={day.date}>
            <N.DayTitle>{day.date}</N.DayTitle>
            <N.SubText>가능한 시간을 전부 선택해 주세요</N.SubText>

            <N.TimeGrid>
              {day.times.map((time, idx) => {
                const value = `${day.date}-${time}`;
                const isSelected = selected.includes(value);

                return (
                  <N.TimeButton
                    key={`${value}-${idx}`}
                    $selected={isSelected}
                    onClick={() => handleSelect(day.date, time)}>
                    {time}
                  </N.TimeButton>
                );
              })}
            </N.TimeGrid>
          </N.DaySection>
        ))}

        <N.NextButtonGrid>
          <N.NextButton
            disabled={selected.length === 0} 
            onClick={() => navigate("/timedone")}>
            다음으로
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>

      <Footer />
    </>
  );
}

export default TimeSelection;
