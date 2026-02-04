import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/TimeSelectionStyle";
import axios from "axios";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

import notice from "@/assets/icons/notice.svg";

// const DAYS = [
//   {
//     date: "3월 4일 수요일",
//     times: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"],
//   },
//   {
//     date: "3월 5일 목요일",
//     times: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"],
//   },
//   {
//     date: "3월 6일 금요일",
//     times: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"],
//   },
// ];
//하드 코딩된 시간 슬롯 부분은 연동 중에 주석처리 했습니다.

function TimeSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { email } = location.state;

  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState([]);

  // 개발용 fallback state, 배포 전 삭제해야 함
  const devState = {
    fromResult: true,
  };

  const { fromResult } = location.state ?? devState;

  useEffect(() => {
    if (import.meta.env.PROD) {
      if (!location.state || !location.state.email) {
        navigate("/error");
      }
    }
  }, [location, navigate]);

  //API 연결
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;

        const res = await axios.get(`${API_URL}/check/slots/`);
        setSlots(res.data.data);
      } catch (err) {
        console.error("면접 시간 조회 실패", err);
      }
    };

    fetchSlots();
  }, []);

  //날짜 기준으로 슬롯 그룹화
  const groupedSlots = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {});

  // const handleSelect = (day, time) => {
  //   const value = `${day}-${time}`;
  //   setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  // };
  //하드 코딩용 선택 토글이어서 연동 중 주석처리했습니다.

  const handleSelect = (slotId) => {
    setSelected((prev) =>
      prev.includes(slotId)
        ? prev.filter((id) => id !== slotId)
        : [...prev, slotId]
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

        {/* id가 아닌 문자열을 받아서 map하는 함수(하드코딩용)이어서 주석처리 했습니다. 
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
        ))} */}

        {Object.entries(groupedSlots).map(([date, daySlots]) => (
          <N.DaySection key={date}>
            <N.DayTitle>{date}</N.DayTitle>
            <N.SubText>가능한 시간을 전부 선택해 주세요</N.SubText>

            <N.TimeGrid>
              {daySlots.map((slot) => {
                const isSelected = selected.includes(slot.id);

                return (
                  <N.TimeButton
                    key={slot.id}
                    $selected={isSelected}
                    onClick={() => handleSelect(slot.id)}
                  >
                    {slot.start_time.slice(0, 5)} ~ {slot.end_time.slice(0, 5)}
                  </N.TimeButton>
                );
              })}
            </N.TimeGrid>
          </N.DaySection>
        ))}

        <N.NextButtonGrid>
          <N.NextButton
            disabled={selected.length === 0}
            onClick={() =>
              navigate("/timedone", {
                state: {
                  selectedTimes: selected,
                  email,
                },
              })
            }>
            제출하기
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>

      <Footer />
    </>
  );
}

export default TimeSelection;
