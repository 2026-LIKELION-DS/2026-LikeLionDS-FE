import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/TimeSelectionStyle";
import axios from "axios";

import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

import notice from "@/assets/icons/notice.svg";


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
  //아카이빙 과정에서 연동 부분은 주석처리했습니다.
  // useEffect(() => {
  //   const fetchSlots = async () => {
  //     try {
  //       const API_URL = import.meta.env.VITE_API_URL;

  //       const res = await axios.get(`${API_URL}/check/slots/`);
  //       setSlots(res.data.data);
  //     } catch (err) {
  //       console.error("면접 시간 조회 실패", err);
  //     }
  //   };

  //   fetchSlots();
  // }, []);

  //날짜 기준으로 슬롯 그룹화
  const groupedSlots = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {});


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
