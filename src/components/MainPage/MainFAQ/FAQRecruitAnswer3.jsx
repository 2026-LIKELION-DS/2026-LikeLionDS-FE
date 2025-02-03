import * as M from "@styles/MainFAQStyle";
import * as M_ from "@styles/FAQActivityAnswer1Style";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import lion_face from "@assets/icons/🦁 사자 얼굴.svg";

const FAQRecruitAnswer3 = () => {
  return (
    <>
      <M_.AnswerContainer>
        <M.ChatWrapper>
          <M.IconImg src={lion_face} width={"40px"} />
        </M.ChatWrapper>

        {/* 모집 관련 3번 답변 */}
        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"217px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            정해진 모집 인원은 없지만,
            <br />
            <b style={{ fontWeight: "700" }}>20~30명 내외</b>로 선발예정이에요.
          </JoinRectangle>
        </M.ComponentContainer>

        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"246px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            작년 12기에는 기획•디자인 4명, 프론트
            <br />
            엔드 12명, 백엔드 9명이 함께 했어요!
          </JoinRectangle>
        </M.ComponentContainer>
      </M_.AnswerContainer>
    </>
  );
};

export default FAQRecruitAnswer3;
