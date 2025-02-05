import * as M from "@styles/MainFAQStyle";
import * as M_ from "@styles/FAQActivityAnswer1Style";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import lion_face from "@assets/icons/🦁 사자 얼굴.svg";

const FAQActivityAnswer2 = () => {
  return (
    <>
      <M_.AnswerContainer>
        <M.ChatWrapper>
          <M.IconImg src={lion_face} width={"40px"} />
        </M.ChatWrapper>

        {/* 활동 관련 2번 답변 */}
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
            <b style={{ fontWeight: "700" }}>세션과 스터디 모두 필수 참여</b>를 원칙으로
            <br />
            해요.
          </JoinRectangle>
        </M.ComponentContainer>

        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"216px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            부득이한 사정이 있을 시
            <br />꼭 운영진에게 미리 전달해야 해요.
          </JoinRectangle>
        </M.ComponentContainer>
      </M_.AnswerContainer>
    </>
  );
};

export default FAQActivityAnswer2;
