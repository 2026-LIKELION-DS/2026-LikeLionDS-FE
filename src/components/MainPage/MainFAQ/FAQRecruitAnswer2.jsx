import * as M from "@styles/MainFAQStyle";
import * as M_ from "@styles/FAQActivityAnswer1Style";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import lion_face from "@assets/icons/🦁 사자 얼굴.svg";

const FAQRecruitAnswer2 = () => {
  return (
    <>
      <M_.AnswerContainer>
        <M.ChatWrapper>
          <M.IconImg src={lion_face} width={"40px"} />
        </M.ChatWrapper>

        {/* 모집집 관련 2번 답변 */}
        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"224px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            작년 12기 아기사자 기준 2-3학년이
            <br />
            가장 많았어요.
          </JoinRectangle>
        </M.ComponentContainer>

        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"246px"}
            height={"78px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            하지만 본인의 <b style={{ fontWeight: "700" }}>열정과 끈기만 있다면</b>
            <br />
            학년과 상관없이 충분히 참여하실 수 <br />
            있습니다.
          </JoinRectangle>
        </M.ComponentContainer>
      </M_.AnswerContainer>
    </>
  );
};

export default FAQRecruitAnswer2;
